// Karma configuration file
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54

module.exports = function (config) {
	'use strict';

	config.set({
		autoWatch: true,
		basePath: '',
		browsers: ['Chrome'],
		files: [
			'index.js',
			'test/*.js'
		],
		frameworks: [
			'jasmine'
		],
		reporters: ['progress'],
		singleRun: true
	});
};