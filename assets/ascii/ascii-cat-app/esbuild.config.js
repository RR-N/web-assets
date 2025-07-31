// esbuild.config.js  (CommonJS)

const { build } = require('esbuild');

build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  minify: true,
  outfile: 'dist/bundle.js',
  platform: 'browser',
  target: 'es2020',
  jsx: 'automatic',                     // React 17+ automatic transform
  loader: { '.js': 'jsx', '.jsx': 'jsx' }
}).catch(() => process.exit(1));
