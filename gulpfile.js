var gulp	= require('gulp');
var deploy	= require('gulp-gh-pages');

gulp.task('build', function () {
  gulp.src('./src/**/*')
    .pipe(gulp.dest('./dist'));
});

var options = { 
	remoteUrl: "https://github.com/mwhelan/rebolyte.github.io.git",
	branch: "master"
};
/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy(options))
});