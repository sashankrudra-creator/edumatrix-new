import fs from 'fs';
import path from 'path';
import https from 'https';

const publicImagesDir = './public/images';

const heroes = [
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200', name: 'hero-programs.jpg' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200', name: 'hero-stem.jpg' },
  { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200', name: 'hero-academic.jpg' },
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200', name: 'hero-institutional.jpg' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200', name: 'hero-about.jpg' }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed: ${res.statusCode}`));
      }
    });
  });
}

async function run() {
  for (const hero of heroes) {
    const filepath = path.join(publicImagesDir, hero.name);
    console.log(`Downloading ${hero.url} to ${filepath}`);
    try {
      await downloadImage(hero.url, filepath);
      console.log(`Successfully downloaded ${hero.name}`);
    } catch (err) {
      console.error(`Failed to download ${hero.name}: ${err.message}`);
    }
  }
}

run();
