const fs = require('fs');
const path = require('path');

// Points to 'app' folder in project root (one folder up from 'scripts')
const APP_DIR = path.resolve(__dirname, '../app');

function updateCodeFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`✖ Directory does not exist: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      updateCodeFiles(fullPath);
    } else if (entry.isFile() && /\.(jsx?|tsx?)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Replace .png, .jpg, .jpeg with .webp in asset imports/paths
      const updatedContent = content.replace(
        /(\/assets\/[^\s'"]+?)\.(png|jpg|jpeg)/gi,
        '$1.webp'
      );

      if (content !== updatedContent) {
        fs.writeFileSync(fullPath, updatedContent, 'utf8');
        console.log(`Updated image paths in: ${path.relative(path.resolve(__dirname, '..'), fullPath)}`);
      }
    }
  }
}

console.log('🔄 Updating image references in code files...\n');
updateCodeFiles(APP_DIR);
console.log('\n✅ Code references updated to .webp!');