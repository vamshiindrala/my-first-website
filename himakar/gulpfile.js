var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

gulp.task('compile', function () {
  	return gulp.src('./stylus/*.styl')
	    .pipe(stylus())
	    .pipe(gulp.dest('./css/build'));
});

gulp.task('watch', function () {
    gulp.watch(['./stylus/*.styl'], ['compile']);
});

gulp.task('default', ['compile', 'watch']);