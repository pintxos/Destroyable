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