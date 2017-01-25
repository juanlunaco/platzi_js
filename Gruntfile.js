module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass : {
            dist: {
                files: {
                    'public/main.css': 'public/main.scss'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass']);

};