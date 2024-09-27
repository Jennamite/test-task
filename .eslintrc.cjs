/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-multiple-template-roots': 'off',
    'vue/max-attributes-per-line': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3, // Maximum number of attributes allowed in a single line
      multiline: {
        max: 1, // Maximum number of attributes allowed per line in a multi-line element
        allowFirstLine: true // Allow attributes on the first line of a multi-line element
      }
    }]
  }
}
