module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.initConfig ({
    uglify: {
      my_target: {
        files : {
          "_/js/scripts.js" : ["_/components/js/*.js"]
        }//files
      }//my_target
    },//uglify
    sass: {
      options: {
        style: "expanded",
        sourcemap: "file"
      },//options
      dev: {
        files: {
          "_/components/css/styles.css": ["_/components/sass/styles.scss"]
        }//files
      }//dist
    },//sass
    autoprefixer: {
      options: {
        browser: ["lates 2 versions", "ie 11", "edge", "firefox", "safari", "opera", "chrome"]
      },
      my_target: {
        src: "_/components/css/styles.css",
        dest: "_/css/styles.css"
      }
    },
    watch : {
      options: { livereload: true },
      scripts: {
        files : ["_/components/js/*.js"],
        tasks : ["uglify"]
      },//scripts
      sass: {
        files : ["_/components/sass/*.scss"],
        tasks : ["sass"]
      },//sass
      html : {
        files: ["*.html"]
      },//html
      autoprefixer: {
        files: ["_/components/css/styles.css"],
        tasks: ["autoprefixer"]
      },
    }//watch
  });//initConfig
  grunt.registerTask("default", "watch");
};
