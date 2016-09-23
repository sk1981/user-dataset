var webpackConfig = require('./webpack-config.test');

module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    reporters: [
      'spec'
    ],
    files: [
      './test/**/*spec.js'
    ],
    preprocessors: {
      './test/**/*.js': ['webpack'],
      './src/**/*.js': ['webpack']

    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: 'errors-only'
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ],
    remapIstanbulReporter: { // fixme
      src: './istanbul/report.json',
      reports: {
        html: './istanbul/report'
      }
    }
  })
};