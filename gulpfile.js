var rename = require('gulp-rename')
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

 // Postcss ***********************


gulp.task('css', function () {
    var processors = [
   	autoprefixer({browsers: ['>=100%']}),
   ];
     return gulp.src('app/css/main.css')
        .pipe(postcss(processors))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('app/css/'));
});

	// watch ************************

gulp.task('watch', function(){
	gulp.watch('**/*.css', ['css']);
});

	// gulp-default ************************


gulp.task('default', ['css', 'watch']);
