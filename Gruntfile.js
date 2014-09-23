module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile css/*.scss Sass files
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: true
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        // Watch for changes
        watch: {
            sass: {
                files: 'css/*.scss',
                tasks: ['sass']
            }
        },

        // Launch a static server
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './'
                }
            }
        }

    });

    // Load Grunt modules
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Set Grunt tasks
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('server', ['connect', 'watch']);
}
