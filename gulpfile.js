// Require gulp
var gulp = require('gulp');

// Require plugins
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

// Compress JS
gulp.task('uglify', function() {
  gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('builds/development/js-min'))
});

// Compile Jade
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade( {
            pretty: true
        }))
        .pipe(gulp.dest('builds/development'));
});

// Compile SASS
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(plumber () )
        .pipe(sass({
            style: 'nested',
            lineNUmbers: true
        }))
        .pipe(gulp.dest('builds/development/css'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['uglify']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.jade', ['jade']);
});


gulp.task('default', ['uglify','sass', 'jade', 'watch']);
