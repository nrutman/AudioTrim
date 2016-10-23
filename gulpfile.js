var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

/**
 * Directories
 */

var javascriptGlob = [
    './app/ng/modules/**/*.js',
    './app/ng/config/**/*.js',
    './app/ng/run/**/*.js',
    './app/ng/**/*.js'
];
var stylesGlob = [
    './app/sass/**/*.scss'
];

/**
 * Tasks
 */

gulp.task('default', ['javascript', 'styles']);

gulp.task('clean', () => {
    del.sync('./app/dist');
});

gulp.task('javascript', () => {
    return gulp.src(javascriptGlob)
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./app/dist/js'));
});

gulp.task('styles', () => {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest('./app/dist/css'));
});

gulp.task('watch', () => {
    var sassWatcher = gulp.watch(stylesGlob, ['styles']);
    generateWatcherListener(sassWatcher, 'styles');
    var javascriptWatcher = gulp.watch(javascriptGlob, ['javascript']);
    generateWatcherListener(javascriptWatcher, 'javascript');
});

function generateWatcherListener(watcher, taskType) {
    watcher.on('change', function(event) {
        var displayPath = gutil.colors.yellow(event.path.replace(__dirname + '/', ''));
        gutil.log('File', displayPath, 'was', event.type + ', recompiling ' + taskType + '...');
    });
}
