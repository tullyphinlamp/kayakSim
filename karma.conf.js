module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],

        files: ['common/src/**/*.js', 'common/test/**/*.spec.js'],

        browsers: ['PhantomJS'],

        reporters: ['progress'],

        autoWatch: false,
        singleRun: true
    });
};
