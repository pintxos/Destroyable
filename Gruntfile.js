module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		karma: {
  			test: {
    			configFile: 'karma.conf.js'
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
	grunt.registerTask('test', ['jshint', 'karma:test']);

};

