module.exports = function (grunt) {

    // Load Grunt modules
    require('load-grunt-tasks')(grunt);

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
                    dest: 'dist/css',
                    ext: '.css'
                },
                {
                    expand: true,
                    cwd: 'demo/sass',
                    src: ['*.scss'],
                    dest: 'demo/css',
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
                    'dist/css/mscom-grid.css': 'dist/css/mscom-grid.css',
                    'dist/css/mscom-grid-ltr.css': 'dist/css/mscom-grid-ltr.css',
                    'dist/css/mscom-grid-rtl.css': 'dist/css/mscom-grid-rtl.css',
                    'dist/css/mscom-grid-mixed.css': 'dist/css/mscom-grid-mixed.css'
                }
            }
        },

        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/min',
                    ext: '.min.css'
                }]
            }
        },

        // Watch for changes
        watch: {
            sass: {
                files: ['src/sass/*.scss', 'demo/sass/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            html: {
                files: 'demo/*.html'
            }
        },

        browserSync: {
            files: {
                src : ['demo/css/**', 'demo/*.html']
            }, 
            options: {
              watchTask: true,
              server: {
                baseDir: "demo"
            }
          }
        }

    });

    // Set Grunt tasks
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('server', ['browserSync', 'watch']);
}
