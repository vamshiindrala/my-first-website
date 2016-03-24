var gulp = require('gulp');
var stylus = require('gulp-stylus');
// Get one .styl file and render
gulp.task('compile', function () {
return gulp.src('./stylus/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./css/build'));
});
gulp.task('default', ['compile']);