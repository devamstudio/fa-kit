module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development_base: {
                files: {
                    "base/global.css": "base/**/*.less"
                }
            },
            development_design: {
                files: {
                    "design/global.css": "design/**/*.less"
                }
            }
        },

        concat_css: {
            result:
            {
                files: {
                    'fa-kit.css': ['base/global.css', 'design/global.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.registerTask('default', ['less','concat_css']);
};