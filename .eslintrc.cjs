module.exports = {
  plugins: ['jest'],
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-underscore-dangle': [2, { allow: ['__filename', '__dirname'] }],
    'import/extensions': 0, // esm modules import must contain extension
  },
};
