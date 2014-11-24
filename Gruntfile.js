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
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'src/sass/css',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'demo/sass',
                    src: ['*.scss'],
                    dest: 'demo/sass/css',
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
                    'src/sass/css/mscom-grid.css': 'src/sass/css/mscom-grid.css'
                }
            }
        },

        // Watch for changes
        watch: {
            sass: {
                files: ['src/sass/*.scss', 'demo/sass/*.scss'],
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
                    base: './demo'
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
