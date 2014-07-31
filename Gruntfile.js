module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: ['common/src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        jshint: {
            files: ['gruntfile.js', 'common/src/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['concat', 'jshint']);
};
