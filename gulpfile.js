'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
gulp.task('scss', function () {
    return gulp.src('resources/sass/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('resources/css'));
});

gulp.task('watch', function () {
    gulp.watch('resources/sass/**/*.scss', gulp.series('scss'));
});
