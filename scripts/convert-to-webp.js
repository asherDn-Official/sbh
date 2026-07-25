const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Points to 'public' folder in project root (one folder up from 'scripts')
const PUBLIC_DIR = path.resolve(__dirname, '../public');

const TARGET_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function convertDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`✖ Directory does not exist: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();

      if (TARGET_EXTENSIONS.includes(ext)) {
        const parsedPath = path.parse(fullPath);
        const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);

          const origSize = (fs.statSync(fullPath).size / 1024).toFixed(1);
          const newSize = (fs.statSync(webpPath).size / 1024).toFixed(1);

          console.log(
            `✔ Converted: ${parsedPath.base} (${origSize} KB) -> ${parsedPath.name}.webp (${newSize} KB)`
          );
        } catch (err) {
          console.error(`✖ Error processing ${parsedPath.base}:`, err.message);
        }
      }
    }
  }
}

console.log('🚀 Starting bulk WebP conversion & compression...\n');
convertDirectory(PUBLIC_DIR)
  .then(() => {
    console.log('\n✅ All images successfully converted and compressed!');
  })
  .catch((err) => console.error('Batch conversion error:', err));