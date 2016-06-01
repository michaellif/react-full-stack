var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
	return browserify({
		entries : './app/js/app.js',
		debug : true
	})
	.transform("babelify", {presets: ["react"]})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', [ 'build' ], function() {
	gulp.watch('app/**/*.js', [ 'build' ]);
});

gulp.task('default', [ 'watch' ]);