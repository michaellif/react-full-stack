var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

gulp.task('bundle', function() {
	browserify({
		entries : './app/js/app.js',
		debug : true
	}).transform("babelify", {
		presets : [ "es2015", "react" ]
	}).bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist'));
	console.log('bundle.js has been rebuilt');
});

gulp.task('nonjs', function() {
	gulp.src('app/**/*.!(js)').pipe(gulp.dest('dist'));
	console.log('nonjs files have been copied');
});

gulp.task('watch', [ 'bundle', 'nonjs' ], function() {
	gulp.watch('app/js/**/*.js', [ 'bundle' ]);
	gulp.watch('app/**/*.!(js)', [ 'nonjs' ]);
});

gulp.task('connect', function() {
	connect.server();
});

gulp.task('connect', function() {
	connect.server({
		root : 'dist',
		livereload : true,
		port : 8282,
		host : 'localhost'
	});
});

gulp.task('clean', function(callback) {
	rimraf('./dist', callback);
});

gulp.task('default', [ 'watch', 'connect' ]);