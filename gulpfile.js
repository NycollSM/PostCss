var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var precss = require('precss');
var cssnext = require("cssnext");


gulp.task('styles', function(){
    var processor = [
        csswring,
        precss,
        cssnext
    ];

    return gulp.src('src/**/*.css')
    .pipe(postcss(processor))
    .pipe(gulp.dest('./dest'));

});
gulp.task('watch:styles', function(){
    gulp.watch('src/**/*.css', ['styles']);
});