import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\\\Users\\\\sashank rudra\\\\.gemini\\\\antigravity-ide\\\\brain\\\\6126210d-5d48-4d43-aee4-0d31f74b306e';
const publicImagesDir = './public/images';

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const generatedImages = [
  'robotics', 'avionics', '3d_printing', 'ai', 'vr', 'astrophysics', 'gamified_learning', 'entrepreneurship'
];

// Copy generated images
for (const slug of generatedImages) {
  const files = fs.readdirSync(artifactsDir);
  const file = files.find(f => f.startsWith(slug + '_') && f.endsWith('.jpg'));
  if (file) {
    fs.copyFileSync(path.join(artifactsDir, file), path.join(publicImagesDir, `${slug}.jpg`));
    console.log(`Copied ${slug}.jpg`);
  }
}

// Update programs.ts
let programsSrc = fs.readFileSync('./src/data/programs.ts', 'utf8');

// We need to add `image?: string;` to `export type Program`
if (!programsSrc.includes('image?: string;')) {
  programsSrc = programsSrc.replace('export type Program = {', 'export type Program = {\\n  image?: string;');
}

const imageMapping = {
  'robotics': '/images/robotics.jpg',
  'avionics': '/images/avionics.jpg',
  '3d-printing': '/images/3d_printing.jpg',
  'artificial-intelligence': '/images/ai.jpg',
  'ar-vr-mr-xr': '/images/vr.jpg',
  'astrophysics': '/images/astrophysics.jpg',
  'gamified-learning': '/images/gamified_learning.jpg',
  'entrepreneurship': '/images/entrepreneurship.jpg',
  'dream-goals': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
  'elite-scorer': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  'online-offline-assessment': 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
  'mathematics': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
  'physics': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
  'chemistry': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
  'biology-labs': 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
  'olympiad-training': 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=800',
  'english-language-skills': 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
  'language-club': 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800',
  'abacus-vedic-mathematics': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
  'psychological-counselling': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
  'school-erp': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
  'elite-jobs': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
  'interactive-panels': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  'school-branding': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  'science-expos-fests': 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800'
};

for (const [slug, imgPath] of Object.entries(imageMapping)) {
  if (!programsSrc.includes(`image:'${imgPath}'`)) {
    const regex = new RegExp(`({ slug:'${slug}', )`);
    programsSrc = programsSrc.replace(regex, "$1image:'" + imgPath + "', ");
  }
}

fs.writeFileSync('./src/data/programs.ts', programsSrc);
console.log('Programs updated!');
