module.exports = function(grunt) {
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
      					'/jquery.min.js': '/jquery/dist/jquery.min.js'
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
					'style/style.css' : 'sass/style.scss'
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
      			files: ['Gruntfile.js', 'build/**/*.js'],
      			options: {
        			globals: {
          				jQuery: true
          			}
      		 	}
    		}
	});

	// Load the plugin that provides the "uglify" task.
  	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.registerTask('default',['bowercopy', 'uglify', 'watch']);
	
	grunt.registerTask('dev',['bowercopy', 'sass:dist','jshint', 'uglify']);
}
