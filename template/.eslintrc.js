module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@react-native-community', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-react'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
