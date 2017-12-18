module.exports = function(grunt) {

		var jpegOptim = require('imagemin-jpegoptim');

		grunt.initConfig({
		  pkg: grunt.file.readJSON('package.json'),
		  imagemin: {
		      dynamic: {
		          options: { 
		              full:true,
		              optimizationLevel: 5,
		              svgoPlugins: [
		                  { removeViewBox: false },
		                  { cleanupIDs: false }
		              ],
		              use: [jpegOptim({max:70})]
		          },
		        files: [{
		          expand: true,
		          cwd: 'src/',
		          src: ['**/*.{png,jpg,gif}'],
		          dest: 'img/'  
		        }]
		      }
		  }

		 
		});

	// imagemin
		grunt.loadNpmTasks('grunt-contrib-imagemin');

		// Default task(s).
		grunt.registerTask('default', ['imagemin']);	
}