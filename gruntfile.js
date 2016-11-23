module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.initConfig ({

    // minify javaScript
    uglify: {
      my_target: {
        files : {
          "dist/js/scripts.js" : ["dist/builds/js/*.js"]
        }//files
      }//my_target
    },//uglify

    //compile sass
    sass: {
      options: {
        sourceMap: true,
        outputStyle: "compressed"
      },//options
      dev: {
        files: {
          "dist/builds/css/styles.css": ["dist/builds/sass/*.scss", "dist/builds/sass/base/*.scss", "dist/builds/sass/modules/*.scss", "dist/builds/sass/pages/*.scss", "dist/builds/sass/layout/*.scss"]
        }//files
      }//dist
    },//sass

    //automatic browser prefixing
    autoprefixer: {
      options: {
        browser: ["last 6 versions"],
        cascade: true
      },
      my_target: {
        src: "dist/builds/css/styles.css",
        dest: "dist/css/styles.css"
      }
    },

    //watch
    watch : {
      scripts: {
        files : ["dist/builds/js/*.js"],
        tasks : ["uglify"]
      },//scripts
      sass: {
        files : ["dist/builds/sass/*.scss", "dist/builds/sass/base/*.scss", "dist/builds/sass/modules/*.scss", "dist/builds/sass/pages/*.scss", "dist/builds/sass/layout/*.scss"],
        tasks : ["sass"]
      },//sass
      html : {
        files: ["*.html"]
      },//html
      autoprefixer: {
        files: ["dist/builds/css/styles.css"],
        tasks: ["autoprefixer"]
      },
    },//watch

    //livereload
    browserSync: {
      bsFiles: {
        src : ["*.html", "dist/css/styles.css", "dist/js/scripts.js"]
      },
    options: {
      watchTask: true,
        server: {
            baseDir: "./"
        }//server
      }//options
    }//browserSync
  });//initConfig

  grunt.registerTask("default", ["browserSync", "watch"]);
};
