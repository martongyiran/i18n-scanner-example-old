const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
  input: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  output: './',
  options: {
    debug: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx'] // TS Transform below!
    },
    trans: {
      component: 'Trans',
      extensions: ['.js', '.jsx']
    },
    sort: true,
    removeUnusedKeys: true,
    lngs: ['en', 'hu'],
    defaultLng: 'hu',
    defaultNs: 'translation',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'src/services/i18n/locales/{{lng}}.json',
      savePath: 'src/services/i18n/locales/{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  transform: typescriptTransform({
    extensions: ['.ts', '.tsx'],
    tsOptions: {
      target: 'es2020'
    }
  })
};
