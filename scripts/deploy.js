const ftp = require('basic-ftp');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

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

  const user = process.env.FTP_USER || 'u539280926';
  const password = process.env.FTP_PASSWORD || 'Iyalvanam@1975';

  console.log(`📡 3. Connecting to Hostinger FTP [${host}] with user [${user}]...`);

  const client = new ftp.Client(45000);
  client.ftp.verbose = true;

  try {
    try {
      await client.access({
        host: host,
        user: user,
        password: password,
        secure: false,
      });
    } catch (insecureErr) {
      console.log('Trying with explicit TLS secure mode...');
      await client.access({
        host: host,
        user: user,
        password: password,
        secure: true,
        secureOptions: { rejectUnauthorized: false }
      });
    }

    console.log(' Connected to FTP server.');
    console.log('📁 Navigating to public_html...');
    await client.ensureDir('public_html');

    console.log('⬆️ Uploading dist files to public_html on Hostinger...');
    await client.uploadFromDir(distPath);

    console.log('🎉 DEPLOYMENT SUCCESSFUL! Your website is live on https://iyalvanam.org');
  } catch (err) {
    console.error('❌ FTP Deployment failed:', err.message);
    throw err;
  } finally {
    client.close();
  }
}

const targetHost = process.argv[2] || '145.223.17.33';
deploy(targetHost).catch((err) => {
  console.error(err);
  process.exit(1);
});
