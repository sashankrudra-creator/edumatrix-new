import fs from 'fs';
import path from 'path';
import https from 'https';

const publicImagesDir = './public/images';

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
}

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const urlRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\s'"]*/g;
  const matches = content.match(urlRegex);
  
  if (matches) {
    for (let i = 0; i < matches.length; i++) {
      const url = matches[i];
      // Generate a simple filename from the ID
      const idMatch = url.match(/photo-([a-zA-Z0-9-]+)/);
      const filename = idMatch ? `unsplash-${idMatch[1]}.jpg` : `unsplash-${Date.now()}.jpg`;
      const filepath = path.join(publicImagesDir, filename);
      
      console.log(`Downloading ${url} to ${filepath}`);
      try {
        await downloadImage(url, filepath);
        content = content.replace(url, `/images/${filename}`);
        console.log(`Successfully downloaded and replaced ${filename}`);
      } catch (err) {
        console.error(`Failed to download ${url}: ${err.message}`);
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
  } else {
    console.log(`No images found in ${filePath}`);
  }
}

async function run() {
  await processFile('./src/data/programs.ts');
  await processFile('./src/data/content.ts');
  console.log('All downloads completed!');
}

run();
