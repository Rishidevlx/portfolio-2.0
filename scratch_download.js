const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, 'public', 'assets', 'lanyard');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  {
    url: 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/card.glb',
    dest: path.join(targetDir, 'card.glb')
  },
  {
    url: 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/lanyard.png',
    dest: path.join(targetDir, 'lanyard.png')
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${url} to ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  try {
    for (const asset of assets) {
      await download(asset.url, asset.dest);
    }
    console.log('All lanyard assets downloaded successfully!');
  } catch (err) {
    console.error('Download failed:', err);
  }
}

main();
