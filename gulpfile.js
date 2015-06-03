// responsible for build process
var gulp = require('gulp');

// build process debugging
var gutil = require('gulp-util');

// manages text files in build process
var source = require('vinyl-source-stream');

// manages module load order
var browserify = require('browserify');

// reruns gulp file automatically on save
var watchify = require('watchify');

// converts jsx to js
var reactify = require('reactify');

gulp.task('default', function() {
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};
	build()
	bundler.on('update', build)
})