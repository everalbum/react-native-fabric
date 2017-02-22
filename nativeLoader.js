const { NativeModule } = require('react-native');

const loadNativeModule = (name, mock) => {
  let mod;
  let err;

  try {
    mod = NativeModules[mod];
  } catch (e) {
    err = e;
  }

  if (e || !mod) {
    console.warn(`Unable to load Native Module ${name}`, e);
  }

  return mod || mock || {};
};

const noop = () => undefined;

module.exports = {
  loadNativeModule,
  noop,
};
