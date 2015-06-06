'use strict';

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    serve = require('gulp-serve');

gulp.task('build', function () {
    browserify({
        entries: './src/index.js',
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('output.js'))
        .pipe(gulp.dest('./dist'));
});
gulp.task('serve', serve('dist'));

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['build', 'serve', 'watch']);
