import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended'
    ]
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintConfigPrettier
]
