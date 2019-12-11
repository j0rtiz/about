module.exports = function (ctx) {
  return {
    boot: ['axios'],
    css: ['app.sass'],
    extras: [
      'ionicons-v4',
      'mdi-v4',
      'fontawesome-v5',
      'roboto-font',
      'material-icons'
    ],
    framework: {
      iconSet: 'fontawesome-v5',
      lang: 'pt-br',
      all: 'auto',
      components: [],
      directives: [],
      plugins: []
    },
    supportIE: false,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      showProgress: true,
      distDir: 'dist',
      publicPath: '/',
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish')
          }
        })
      }
    },
    devServer: {
      https: true,
      port: 5000,
      open: true
    },
    animations: 'all',
    ssr: {},
    pwa: {},
    cordova: {},
    capacitor: {},
    electron: {}
  }
}
