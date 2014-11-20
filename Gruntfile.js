module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile css/*.scss Sass files
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'css/demo',
                    src: ['*.scss'],
                    dest: 'css/demo',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                map: false
            },
            dist: {
                files: {
                    'css/demo/demo.css': 'css/demo/demo.css',
                    'css/demo/msdotcomoffsetmenu.css': 'css/demo/msdotcomoffsetmenu.css'
                }
            }
        },

        // Watch for changes
        watch: {
            sass: {
                files: ['css/*.scss', 'css/demo/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            html: {
                files: '*.html'
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
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Set Grunt tasks
    grunt.registerTask('default', ['sass', 'autoprefixer']);
    grunt.registerTask('server', ['connect', 'watch']);
}
