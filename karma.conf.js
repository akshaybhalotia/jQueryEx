// Karma configuration
// Generated on Mon Dec 21 2015 09:45:59 GMT+0530 (IST)

module.exports = function(config) {
	config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jquery-2.1.3', 'jasmine-jquery', 'jasmine'],
    

    // plugins: [
    //     require('karma-jquery'),
    //     require('karma-jasmine-jquery'),
    //     require('karma-jasmine')
    //     ],


    // list of files / patterns to load in the browser
    files: [
    {
    	pattern: 'spec/*.html',
    	watched: true,
    	served: true,
    	included: false
    },
    'lib/*.js',
    'spec/*[sS]pec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	'lib/*.js': ['coverage']
    },


    coverageReporter: {
    	type : 'lcov',
    	dir : 'coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
})
}
