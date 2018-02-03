module.exports = {
  plugins: [
    '~plugins/app',
    '~plugins/vue-lazyload',
    '~plugins/vue-awesome-swiper',
    '~plugins/vue-vee-validate',
    '~plugins/vue-stickykit',
    {src: '~plugins/vue-particles', ssr: false},
    '~plugins/page-mixins'
  ],
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
    middleware: 'server-api-available',

    scrollBehavior (to, from, savedPosition) {
      return {}
    }
  },
  /*
   ** Build configuration
   */
  build:   {
    // this modules are included in the "vendor" js file
    // because we use them in every page
    vendor:  ['axios', 'waterwheel', 'jsonapi-parse'],
    extend (config) {
      // disable uglify, does not support ES6 -_-
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
    },

    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
  },

  head: {
    title:  'Fabrizio Meinero - Imfaber',
    meta:   [
      {
        hid:     'description',
        name:    'description',
        content: 'I am a Front End Engineer, Back End Developer and UI/UX specialist. Check out my lab and web portfolio.'
      },
      {hid: 'og:image', name: 'og:image', content: `${process.env.BASE_URL || 'http://localhost:3000'}/images/imfaber-logo.png`},
      {hid: 'twitter:image', name: 'twitter:image', content: `${process.env.BASE_URL || 'http://localhost:3000'}/images/imfaber-logo.png`},
      {name: 'viewport', content: 'width=device-width, user-scalable=no'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'MobileOptimized', content: 'width'},
      {name: 'HandheldFriendly', content: 'true'},
    ],
    script: [
      {src: '/js/modernizr-custom.js'}
    ],
  },

  css: [
    '@assets/scss/main.scss',
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color:  '#00ff6a',
    height: '3px'
  },

  /*
   ** Modules
   */
  modules: [
    ['@nuxtjs/google-tag-manager', {id: process.env.GTM_ID || 'GTM-XXXXXXX'}],
    //  '@nuxtjs/pwa'
  ]
}
