var gulp	= require('gulp');
var deploy	= require('gulp-gh-pages');

// http://www.michael-whelan.net/deploying-sandra-snow-to-github-pages-with-gulp/

gulp.task('build', function () {
  gulp.src('./src/**/*')
    .pipe(gulp.dest('./dist'));
});

var options = { 
	remoteUrl: 'https://github.com/rebolyte/rebolyte.github.io.git',
	branch: 'master'
};
/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(deploy(options))
});