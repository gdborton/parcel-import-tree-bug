const assert = require('assert');
const Bundler = require('parcel-bundler');

const bundler = new Bundler(require.resolve('./src/index'), {
  watch: false,
  target: 'node',
});

bundler.bundle().then(() => {
  console.log('done building');
  console.log(require('./dist/index'));
  assert.deepEqual(require('./dist/index'), { default: { asdf: 1 } });
});