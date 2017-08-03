const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');

gulp.task('html', () => {
    gulp.src(__dirname + '/view/*.pug')
        .pipe(pug())
        .on('error', (err) => { console.log(err.stack); })
        .pipe(gulp.dest('build/html'))
});

gulp.task('css', () => {
    gulp.src(__dirname + '/style/*.less')
        .pipe(less())
        .on('error', (err) => { console.log(err.message); })
        .pipe(gulp.dest('build/css'))
});

gulp.task('js', () => {
    gulp.src(__dirname + '/js/*.js')
        .pipe(gulp.dest('build/js'))
});

gulp.task('jquery', () => {
    return gulp.src('node_modules/jquery/dist/*.js')
        .pipe(gulp.dest('build/jquery'));
});

gulp.task('bootstrap', ['jquery'], () => {
    return gulp.src('node_modules/bootstrap/dist/**')
        .pipe(gulp.dest('build/bootstrap'));
});

gulp.task('public', () => {
    gulp.src(__dirname + '/public/**')
        .pipe(gulp.dest('build'))
});

gulp.task('index', () => {
    gulp.src(__dirname + '/build/html/index.html')
        .pipe(gulp.dest('build'))
});

gulp.task('default', [ 'html', 'css', 'js', 'bootstrap', 'public', 'index' ]);
gulp.task('watch', ['default'], () => {
    gulp.watch(__dirname + '/view/*.pug', ['html']);
    gulp.watch(__dirname + '/build/html/index.html', ['index']);
    gulp.watch(__dirname + '/public/**', ['public']);
    gulp.watch(__dirname + '/style/*.less', ['css']);
    gulp.watch(__dirname + '/js/*.js', ['js']);
});
