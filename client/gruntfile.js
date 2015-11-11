module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        distFolder: 'dist',
        src: {
            js: {
                modules: 'src/app/**/*.js',
                others: 'src/app/*.js'
            },
            tpl: {
                app: ['src/app/**/*.tpl.html'],
                common: ['src/common/**/*.tpl.html']
            },
            less: ['src/less/*.less']
        },

        // Task configuration will be written here
        jshint: {
            all: [ 'gruntfile.js', 'src/*.js', 'src/**/*.js', 'src/**/**/*.js' ]
        },

        concat: {
            angular: {
                src: [ 'vendor/angular/angular.js', 'vendor/angular/angular-route.js' ],
                dest: '<%= distFolder %>/angular.js'
            }
        },

        uglify: {
            angular: {
                src: [ '<%= concat.angular.src %>' ],
                dest: '<%= distFolder %>/angular.js'
            },

            bootstrap: {
                src:['vendor/angular-ui/bootstrap/*.js'],
                dest: '<%= distFolder %>/bootstrap.js'
            },

            jquery: {
                src:['vendor/jquery/*.js'],
                dest: '<%= distFolder %>/jquery.js'
            }
        },

        jshint:{
            files:['gruntfile.js', '<%= src.js.modules %>', '<%= src.js.others %>', '<%= src.specs %>', '<%= src.scenarios %>'],
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                globals:{}
            }
        },

        html2js: {
            options: {
                base: 'src/app',
                module: 'app.templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            main: {
                src: ['src/app/**/*.html'],
                dest: 'src/app/html2js_template_cache.js'
            }
        }
    });

    // Loading of tasks and registering tasks will be written here
};