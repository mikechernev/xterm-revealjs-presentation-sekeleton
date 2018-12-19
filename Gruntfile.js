module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;
    var root = grunt.option('root') || '.';


    if (!Array.isArray(root)) root = [root];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            dev: {
            },
            options: {
                script: 'server.js',
                port: port
            }
        },
        watch: {
            js: {
                files: [ 'Gruntfile.js' ],
                tasks: 'js'
            },
            html: {
                files: root.map(path => path + '/*.html')
            },
            markdown: {
                files: root.map(path => path + '/*.md')
            },
            options: {
                livereload: true
            },
            express: {
                files: ['server.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
    });

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-express-server' );

    grunt.registerTask( 'serve', [ 'express:dev', 'watch' ] );
}