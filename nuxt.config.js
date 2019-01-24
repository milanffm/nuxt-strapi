const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    dev: (process.env.NODE_ENV !== 'production'),


  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffdd00' },

  /*
  ** Global CSS ans SCSS
  */
  css: [
    // 'assets/scss/variables.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/repository'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader',
      [
        'assets/scss/variables.scss'
      ]]
  ],
  router: {
	// middleware: ['get-api'],
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:1337/': 'http://localhost:1337/',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
};
