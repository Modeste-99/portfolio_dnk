const { spawn } = require('child_process');
const path = require('path');

const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

console.log('Starting Vite build...');

const vite = spawn('node', [vitePath, 'build'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env }
});

vite.on('error', (error) => {
  console.error('Error during build:', error);
  process.exit(1);
});

vite.on('close', (code) => {
  console.log(`Build process exited with code ${code}`);
  process.exit(code);
});
