var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var sequence = require('run-sequence');
var watchify = require('watchify');
gulp.task('default', function () {
	sequence('mainjs');
});

gulp.task('mainjs', function () {
	var b = browserify({
		entries : ['src/js/index.js'],
		cache : {},
		packageCache : {},
		plugin : [watchify]
	});
	
	var bundle = function () {
		b.bundle().pipe(fs.createWriteStream('dist/js/main.js'))
	};
	
	b.bundle()
	.pipe(fs.createWriteStream('dist/js/main.js'));
	
	bundle();
	
	b.on('update', bundle);
});