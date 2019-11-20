module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
