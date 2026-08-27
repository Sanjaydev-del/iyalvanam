const ftp = require('basic-ftp');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

async function uploadToDir(clientConfig, targetDir, distPath) {
  const client = new ftp.Client(60000);
  client.ftp.verbose = true;
  try {
    console.log(`Connecting to FTP for ${targetDir}...`);
    await client.access(clientConfig);
    console.log(`Navigating to ${targetDir}...`);
    await client.ensureDir(targetDir);
    await client.cd(targetDir);

    try {
      await client.remove('default.php');
      console.log('Removed default.php');
    } catch (e) {}

    console.log(`Uploading files from ${distPath} to ${targetDir}...`);
    await client.uploadFromDir(distPath);
    console.log(`Successfully uploaded to ${targetDir}`);
  } finally {
    client.close();
  }
}

async function deploy(rawHost = process.argv[2]) {
  console.log('🚀 Starting Iyalvanam Full-Stack Deployment for Hostinger...');

  // 1. Build Vite frontend
  console.log('📦 1. Building React Single-Page Application (SPA)...');
  execSync('npm.cmd run build', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

  const distPath = path.resolve(__dirname, '..', 'dist');
  const apiSrc = path.resolve(__dirname, '..', 'api');
  const apiDist = path.join(distPath, 'api');

  // 2. Copy PHP API & .htaccess to dist
  console.log('⚙️ 2. Bundling PHP API backend & Apache rewrite rules...');
  if (!fs.existsSync(apiDist)) {
    fs.mkdirSync(apiDist, { recursive: true });
  }
  fs.copyFileSync(path.join(apiSrc, 'index.php'), path.join(apiDist, 'index.php'));
  fs.copyFileSync(path.join(apiSrc, '.htaccess'), path.join(apiDist, '.htaccess'));

  const publicHtaccess = path.resolve(__dirname, '..', 'public', '.htaccess');
  if (fs.existsSync(publicHtaccess)) {
    fs.copyFileSync(publicHtaccess, path.join(distPath, '.htaccess'));
  }

  // Clean host string
  let host = (rawHost || process.env.FTP_HOST || '145.223.17.33').trim();
  host = host.replace(/^ftp:\/\//, '').replace(/^http:\/\//, '').replace(/\/+$/, '');

  const clientConfig = {
    host: host,
    user: process.env.FTP_USER || 'u539280926',
    password: process.env.FTP_PASSWORD || 'Iyalvanam@1975',
    secure: false
  };

  console.log(`📡 3. Connecting to Hostinger FTP [${host}]...`);
  
  // Primary target for iyalvanam.org
  await uploadToDir(clientConfig, '/domains/iyalvanam.org/public_html', distPath);

  // Sync to root public_html
  try {
    await uploadToDir(clientConfig, '/public_html', distPath);
  } catch (e) {
    console.log('Root public_html sync notice:', e.message);
  }

  console.log('🎉 DEPLOYMENT COMPLETE! Live at https://iyalvanam.org');
}

const targetHost = process.argv[2] || '145.223.17.33';
deploy(targetHost).catch((err) => {
  console.error('Deployment error:', err);
  process.exit(1);
});
