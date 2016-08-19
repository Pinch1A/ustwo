module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'scripts/vendor'
                },
                files: {
                    '/jquery.min.js': '/jquery/dist/jquery.min.js',
                    '/parsley.min.js': '/parsleyjs/dist/parsley.min.js'
                }
            }
        },
        copy: {
            libs: {
                options: {
                    flatten: true
                },
                files: {
                    'css/vendor/parsley.css': 'bower_components/parsleyjs/src/parsley.css',
                    'scripts/vendor/es5-shim.min.js': 'node_modules/es5-shim/es5-shim.min.js',
                    'scripts/vendor/chai.js': 'node_modules/chai/chai.js',
                    'scripts/vendor/mocha.js': 'node_modules/mocha/mocha.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        mocha: {
            all: {
                src: ['test/index.html']
            },
            options: {
                run: true
            }
        },
        simplemocha: {
            all: {
                src: ['test/**/*.js', '**/*.spec.js']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bowercopy');
    //grunt.loadNpmTasks('grunt-simple-mocha');
    // Load grunt mocha task
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('mocha', ['mocha']);
    grunt.registerTask('default', ['bowercopy', 'uglify', 'watch', 'mocha']);

    grunt.registerTask('dev', ['bowercopy', 'copy', 'sass', 'jshint', 'uglify']);
};
