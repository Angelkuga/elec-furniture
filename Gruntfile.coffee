module.exports = (grunt) ->
  pkg = grunt.file.readJSON 'package.json'
  grunt.loadNpmTasks task for task of pkg.devDependencies when task.indexOf('grunt-') is 0

  grunt.initConfig
    pkg: pkg
    
    compass: 
      dist: {
        options: {
          config: './config.rb'
        }
        
      }
    watch: 
      src: {
        files: ['scss/*.scss'],
        tasks: ['compass']
      }

  grunt.registerTask 'css', ['compass','watch']