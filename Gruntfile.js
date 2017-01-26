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
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./public/lib/scripts/module.js":
                        ["./lib/scripts/index.js"]
                },
                options: {
                    transform: [['babelify', {presets: ['es2015']}]]
                }
            }
        },
        pug: {
            compile: {
                options : {
                  pretty : true
                },
                files: {
                    'index.html': ['views/index.pug']
                }
            }
        },
        watch : {
            scripts: {
                files: ['lib/**/*.js'],
                tasks: ['browserify'],
                options: {
                    spawn: false,
                }
            },
            css : {
                files: ['lib/**/*.scss'],
                tasks: ['sass', 'copy'],
                options: {
                    spawn: false,
                }
            },
            html : {
                files: ['views/*.pug'],
                tasks: ['pug'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'browserify', 'pug', 'copy']);
};