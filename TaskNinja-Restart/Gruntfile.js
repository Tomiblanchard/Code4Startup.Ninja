module.exports = function(grunt){
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
          }
    },
    webdriver: {
      helloWorld: {
        tests: 'test/**/*'
      },
      options: {
        desiredCapabilities: {
          browserName: 'chrome'
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-webdriver');


  grunt.registerTask('default', ['webdriver']);
  // grunt.registerTask('default', ['jshint', 'karma', 'webdriver']);

};
