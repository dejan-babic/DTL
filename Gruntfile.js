module.exports = function (grunt) {
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		mkdirs: {
			local: ['dist/local']
		},
		clean: {
			local: ['dist']
		},
		copy: {
			local: {
				files: [
					{ expand: true, cwd: '', src: ['app/**', 'templates/**'], dest: 'dist/local' },
					{ expand: true, cwd: 'libs', src: ['angular/angular.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['angular-route/angular-route.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['jquery/dist/jquery.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['bootstrap/dist/js/bootstrap.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['bootstrap/dist/css/bootstrap.css'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['ng-device-detector/ng-device-detector.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: '', src: ['index.html'], dest: 'dist/local' },
				]
			},
			deployLocal: {
				files: [
					{ expand: true, cwd: 'dist/local', src: ['**'], dest: '../../wamp/www/DTL' },
				]
			}
		}
	});

	grunt.registerMultiTask('mkdirs', 'Create directories', function () {
		grunt.util.recurse(this.data, function (elem) {
			grunt.log.writeln('Creating directory: ' + elem);
			grunt.file.mkdir(elem);
		});
	});

	grunt.registerTask('local', ['clean:local', 'mkdirs:local', 'copy:local', 'copy:deployLocal']);

};