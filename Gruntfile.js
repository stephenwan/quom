module.exports = function(grunt) {


    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                src: 'web/style/main.scss',
                dest: 'public/css/style.css'
            }
        },
        watch: {
            dev: {
                files: [
                  'web/style/*/*.scss',
                  'web/style/*.scss',
                  'web/js/*/*/*.js',
                  'web/js/*.js'
                ],
                tasks: [
                  'sass:dist',
                  'jshint:dist',
                  'concat:dist'                  
                ]
            }
        },
        jshint: {
            options: {
                predef: ['angular']
            },
            dist: {
                src: [
                  'web/js/*/*/*.js',
                  'web/js/*.js'
                ]
            }
        },
        concat: {
            dist: {
                src: [
                  'web/js/common/*/module.*.js',
                  'web/js/common/*/*.js',
                  'web/js/areas/*/module.*.js',
                  'web/js/areas/*/*.js',
                  'web/js/*.js'
                ],
                dest: 'public/js/web.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('dist', ['sass', 'jshint', 'concat']);
    grunt.registerTask('default', ['watch:dev']);

};