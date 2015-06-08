module.exports = function (grunt) {
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		mkdirs: {
			noService: ['dist/noService']
		},
		clean: {
			noService: ['dist']
		},
		copy: {
			buildNoService: {
				files: [
					{ expand: true, cwd: '', src: ['app/**', '!app/**/*.spec.js', 'assets/**', 'data/**'], dest: 'dist/noService' },
					{ expand: true, cwd: 'libs', src: ['angular/angular.js'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'libs', src: ['angular-route/angular-route.js'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'libs', src: ['jquery/dist/jquery.js'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'libs', src: ['bootstrap/dist/js/bootstrap.js'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'libs', src: ['bootstrap/dist/css/bootstrap.css'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'libs', src: ['bootstrap/dist/css/bootstrap.css.map'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'libs', src: ['ng-device-detector/ng-device-detector.js'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'libs', src: ['spinkit/css/spinners/3-wave.css'], dest: 'dist/noService/libs' },
					{ expand: true, cwd: 'css', src: ['dtl-main.css'], dest: 'dist/noService/css' },
					{ expand: true, cwd: '', src: ['index.html'], dest: 'dist/noService' },
				]
			}
		},
		less: {
			noService: {
				files: {
					'css/dtl-main.css': 'css/dtl-main.less'
				}
			}
		}
	});

	grunt.registerMultiTask('mkdirs', 'Create directories', function () {
		grunt.util.recurse(this.data, function (elem) {
			grunt.log.writeln('Creating directory: ' + elem);
			grunt.file.mkdir(elem);
		});
	});

	grunt.registerTask('noService', ['less:noService', 'clean:noService', 'mkdirs:noService', 'copy:buildNoService']);

};