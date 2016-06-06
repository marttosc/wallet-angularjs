'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./stylesheets/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets/css/'));
});