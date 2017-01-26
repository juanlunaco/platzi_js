module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass : {
            dist: {
                files: {
                    'lib/styles/main.css': 'lib/styles/main.scss'
                },
                options : {
                    style : "compressed"
                }
            }
        },
        copy : {
            main : {
                files : [
                    {
                        src: ['assets/**/*'], dest: 'public/'
                    },
                    {
                        src: ['lib/styles/main.css'], dest: 'public/'
                    }
                ]
            }
        },
        browserify : {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015']}]]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./public/lib/scripts/module.js":
                        ["./lib/scripts/index.js"]
                }
            }
        },
        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'index.html': ['views/index.pug']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-pug');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'copy', 'browserify', 'pug']);
};