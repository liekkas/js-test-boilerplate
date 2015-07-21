var dir = '.';

module.exports = function(grunt){
    grunt.initConfig({
        jshint:{
            all:[dir+'/src/**/*.js',dir+'/test/**/*.js'],
            options:{
                globals:{
                    _:false,
                    $:false,
                    jasmine: false,
                    describe:false,
                    it:false,
                    expect:false,
                    beforeEach:false,
                    afterEach:false,
                    sinon:false
                },
                browser:true,
                devel:true
            }
        },
        testem:{
            unit:{
                options:{
                    framework:'jasmine2',
                    launch_in_dev:['PhantomJS'],
                    before_tests:'grunt jshint',
                    serve_files:[
                        'node_modules/lodash/index.js',
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/sinon/pkg/sinon.js',
                        dir+'/src/**/*.js',
                        dir+'/test/**/*.js'
                    ],
                    watch_files:[
                        dir+'/src/**/*.js',
                        dir+'/test/**/*.js'
                    ]
                }
            }
        },
        watch:{
            all:{
                files:[
                    dir+'/src/**/*.js',
                    dir+'/test/**/*.js'],
                tasks:['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');

    grunt.registerTask('default',['testem:run:unit']);
};