module.exports = {
  plugins: ['~plugins/vue-lazyload', '~plugins/app', '~/plugins/page-mixins'],
  env:     {
    // your JSON API server URL :
    baseUrl:       process.env.BASE_URL || 'http://localhost:3000',
    jsonApiServer: process.env.JSON_API_SERVER || 'http://imfaber-cms.docker.localhost:8000',
    // jsonApiServer: 'https://live-contentacms.pantheonsite.io',
    jsonApiPrefix: process.env.JSON_API_PREFIX || 'api'
  },
  router:  {
    // check API server is up, to avoid ugly errors pages
    // when its down or when there is no internet connection
    middleware: 'server-api-available'
  },
  /*
   ** Build configuration
   */
  build:   {
    // this modules are included in the "vendor" js file
    // because we use them in every page
    vendor: ['axios', 'waterwheel', 'jsonapi-parse'],
    extend (config) {
      // disable uglify, does not support ES6 -_-
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },

  head:    {
    title: 'Fabrizio Meinero - Imfaber',
    meta: [
      {hid: 'description', name: 'description', content: 'I am a web Front End Engineer, Back End Developer and UI/UX specialist. Check out my bloh and web portfolio.'},
      {name: 'viewport', content: 'width=device-width, user-scalable=no'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'MobileOptimized', content: 'width'},
      {name: 'HandheldFriendly', content: 'true'},
    ],
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'rgba(255, 255, 255, .7)',
    height: '5px'
  },

  /*
   ** Modules
   */
  modules: [
    //  '@nuxtjs/pwa'
  ]
}
