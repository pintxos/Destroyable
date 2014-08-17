module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		karma: {

			options: {
				basePath: '',
				files: [
					'index.js',
					'test/*.js'
				],
				frameworks: [
					'jasmine'
				]
			},

  			dev: {
    			browsers: ['Chrome']	
  			},

  			ci: {
  				browsers: ['PhantomJS'],
  				singleRun: true
  			}
		},

		jshint: {
            files: ['*.js'],
            options: {
                es3: true
            }
        }
	});

	grunt.registerTask('default', []);
	grunt.registerTask('test', ['jshint', 'karma:ci']);

};

