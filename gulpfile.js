var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var browserSync = require('browser-sync').create(); // for live-editing

gulp.task('default',['styles'], function () {

	// Serve files from the root of this project
	browserSync.init({
	    	server: "./"
	});

	gulp.watch('sass/**/*.scss', ['styles']);

	//-----*****   RELOADING of HTML   *****-----
	gulp.watch("*.html").on("change", browserSync.reload);

});


gulp.task('styles', function() {

	gulp.src('sass/**/*.scss')

	.pipe(sass().on('error', sass.logError))

 	.pipe(gulp.dest('./css'))

	//-----*****   RELOADING of CSS   *****-----
	.pipe(browserSync.stream());
});
