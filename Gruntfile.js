module.exports = function(grunt){
  grunt.initConfig({
    coffee: {
      multiple: {
        expand: true,
        flatten: true,
        cwd: 'src/coffee/',
        src: ['*.coffee'],
        dest: 'public/js/',
        ext: '.js'
      },
      options: {
        bare: true
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      scripts: {
        files: {
          'public/js/main.min.js': ['public/js/main.js']
        }
      }
    },
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      coffee: {
        files: ['src/coffee/*'],
        tasks: ['coffee']
      },
      uglify: {
        files: ['public/js/main.js'],
        tasks: ['uglify']
      },
      jade: {
        files: ['views/*']
      },
      options: {
        livereload: true
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task(s).
  grunt.registerTask('default', ['coffee', 'uglify', 'watch']);
}