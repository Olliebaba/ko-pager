// gulpfile.js
'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('default', function() {
    browserSync.init({
        server: "app/"
    });
    gulp.watch("app/**/*").on('change', browserSync.reload);
});
