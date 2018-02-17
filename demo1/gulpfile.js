var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var sequence = require('run-sequence');
gulp.task('default', function () {
	sequence('mainjs','watch');
});

gulp.task('mainjs', function () {
	browserify()
	.add('src/js/index.js')
	.bundle()
	.pipe(fs.createWriteStream('dist/js/main.js'));
})

gulp.task('watch', function () {
	gulp.watch(['src/js/*.js'], function () {
		sequence('mainjs');
	});
});