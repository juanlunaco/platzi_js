module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass : {
            dist: {
                files: {
                    'assets/styles/main.css': 'assets/styles/main.scss'
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
                    "./public/module.js": ["./lib/index.js"]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'copy']);
    grunt.registerTask('script', ['browserify']);

};