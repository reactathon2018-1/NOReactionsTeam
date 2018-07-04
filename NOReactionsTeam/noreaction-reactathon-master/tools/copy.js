
import path from 'path';
import gaze from 'gaze';
import Promise from 'bluebird';
import fs from './lib/fs';
import pkg from '../package.json';

async function copy({ watch } = {}) {
  const ncp = Promise.promisify(require('ncp'));

  await Promise.all([
    ncp('node_modules/bootstrap/dist/css', 'build/public/css'),
    ncp('node_modules/bootstrap/dist/fonts', 'build/public/fonts'),
    ncp('src/public', 'build/public'),
  ]);
  await Promise.all([
    ncp('src/components/common/styles', 'build/public/css'),
  ]);

  await Promise.all([
    ncp('node_modules/font-awesome/css', 'build/public/css'),
    ncp('node_modules/font-awesome/fonts', 'build/public/fonts'),
  ]);

  await Promise.all([
    ncp('node_modules/bootstrap-social/bootstrap-social.css',
    'build/public/css/bootstrap-social.css'),
  ]);

  await fs.writeFile('./build/package.json', JSON.stringify({
    private: true,
    engines: pkg.engines,
    dependencies: pkg.dependencies,
    scripts: {
      start: 'node server.js',
    },
  }, null, 2));

  if (watch) {
    const watcher = await new Promise((resolve, reject) => {
      gaze('src/content/**/*.*', (err, val) => err ? reject(err) : resolve(val));
    });

    const cp = async (file) => {
      const relPath = file.substr(path.join(__dirname, '../src/content/').length);
      await ncp(`src/content/${relPath}`, `build/content/${relPath}`);
    };

    watcher.on('changed', cp);
    watcher.on('added', cp);
  }
}

export default copy;
