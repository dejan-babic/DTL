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
					{ expand: true, cwd: 'libs', src: ['angular/angular.min.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['angular-route/angular-route.min.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['jquery/dist/jquery.min.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['bootstrap/dist/js/bootstrap.min.js'], dest: 'dist/local/libs' },
					{ expand: true, cwd: 'libs', src: ['bootstrap/dist/css/bootstrap.min.css'], dest: 'dist/local/libs' },
					{ expand: true, cwd: '', src: ['index.html'], dest: 'dist/local' },
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

	grunt.registerTask('local', ['clean:local', 'mkdirs:local', 'copy:local']);

};