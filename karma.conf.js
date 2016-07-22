module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    /*
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine', 'source-map-support'],

    // list of files to exclude
    exclude: [],

    /*
     * list of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [
      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'node_modules/core-js/es6/index.js', included: true, watched: false },
      { pattern: 'node_modules/core-js/es7/index.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: false },
      { pattern: 'node_modules/ts-helpers/index.js', included: true, watched: false },

      { pattern: 'src/**/*.spec.ts', included: true }
    ],

    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: {
      'node_modules/core-js/es6/index.js': [
        'webpack'
      ],
      'node_modules/core-js/es7/index.js': [
        'webpack'
      ],
      'src/**/*.spec.ts': [
        'webpack'
      ],
      'src/**/!(*spec).ts': [
        'webpack',
        'sourcemap',
        'coverage'
      ]
    },

    coverageReporter: {
      dir: 'dist/coverage',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage-final.json'
      }]
    },

    remapIstanbulReporter: {
      src: 'dist/coverage/coverage-final.json',
      reports: {
        lcovonly: 'dist/coverage/lcov.info',
        html: 'dist/coverage/'
      },
      timeoutNotCreated: 1000, // default value
      timeoutNoMoreFiles: 1000 // default value
    },

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false,
        colors: true
      }
    },

    webpack: {
      devtool: 'cheap-module-eval-source-map',
      resolve: {
        extensions: [ '', '.ts', '.js', '.json' ]
      },
      module: {
        loaders: [
          {test: /\.html$/, loader: 'html'},
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              stage: 0
            }
          },
          {
            test: /\.ts$/,
            loader: 'ts',
            query: {
              compilerOptions: {
                removeComments: false,
                sourceMap: false,
                inlineSourceMap: true
              }
            }
          }
        ]
      }
    },

    /*
     * test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    /*
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'PhantomJS'
      // 'Chrome'
    ],

    /*
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: false
  });
};
