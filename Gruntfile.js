
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      coverage: {
        src:['app/js/*.js'],
        options: {
          specs: 'spec/*.js',
          keepRunner: true,
          junit: { 
            path: 'reports/xml',
            consolidate: true
          },
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'reports/coverage/coverage.json',
            report: [
              {
                type: 'html',
                options: {
                  dir: 'reports/coverage/html'
                }
              }, 
              {
                type: 'cobertura', 
                options: {
                  dir: 'reports/coverage/cobertura'
                }
              },
              {
                type: 'text-summary'
              }
            ]
          }
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jasmine']);

};
