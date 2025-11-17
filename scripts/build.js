const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Helper function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean dist directory
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

console.log('Building for production...');

// Compile Tailwind CSS
console.log('Compiling Tailwind CSS...');
execSync('npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify', { 
  stdio: 'inherit',
  cwd: path.join(__dirname, '..')
});

// Copy HTML file
console.log('Copying HTML files...');
fs.copyFileSync(
  path.join(__dirname, '..', 'index.html'),
  path.join(distDir, 'index.html')
);

// Copy images directory
console.log('Copying images...');
const imagesSrc = path.join(__dirname, '..', 'images');
const imagesDest = path.join(distDir, 'images');
copyDir(imagesSrc, imagesDest);

// Copy fonts directory
console.log('Copying fonts...');
const fontsSrc = path.join(__dirname, '..', 'fonts');
const fontsDest = path.join(distDir, 'fonts');
copyDir(fontsSrc, fontsDest);

console.log('Build complete! Files are in the dist/ directory.');

