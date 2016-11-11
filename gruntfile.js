module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.initConfig ({
    uglify: {
      my_target: {
        files : {
          "dist/js/scripts.js" : ["dist/components/js/*.js"]
        }//files
      }//my_target
    },//uglify
    sass: {
      options: {
        outputStyle: "expanded",
      },//options
      dev: {
        files: {
          "dist/components/css/styles.css": ["dist/components/sass/*.scss", "dist/components/sass/base/*.scss", "dist/components/sass/modules/*.scss", "dist/components/sass/pages/*.scss", "dist/components/sass/layout/*.scss"]
        }//files
      }//dist
    },//sass
    autoprefixer: {
      options: {
        browser: ["lates 2 versions", "ie 11", "edge", "firefox", "safari", "opera", "chrome"]
      },
      my_target: {
        src: "dist/components/css/styles.css",
        dest: "dist/css/styles.css"
      }
    },
    watch : {
      options: { livereload: true },
      scripts: {
        files : ["dist/components/js/*.js"],
        tasks : ["uglify"]
      },//scripts
      sass: {
        files : ["dist/components/sass/*.scss", "dist/components/sass/base/*.scss", "dist/components/sass/modules/*.scss", "dist/components/sass/pages/*.scss", "dist/components/sass/layout/*.scss"],
        tasks : ["sass"]
      },//sass
      html : {
        files: ["*.html"]
      },//html
      autoprefixer: {
        files: ["dist/components/css/styles.css"],
        tasks: ["autoprefixer"]
      },
    }//watch
  });//initConfig
  grunt.registerTask("default", "watch");
};
