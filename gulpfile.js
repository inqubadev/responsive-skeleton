var gulp 	= require('gulp'),
	tinypng = require('gulp-tinypng'),
	rimraf 	= require('gulp-rimraf'),
	usemin 	= require('gulp-usemin'),
	uglify 	= require('gulp-uglify');

gulp.task('clean', function() {
	gulp.src('www', {read: false})
        .pipe(rimraf());
});

gulp.task('css', function() {
	gulp.src('src/css/*.css')
		.pipe(gulp.dest('www/css'));
});

gulp.task('img', function() {
	gulp.src(['src/img/**/*.*', '!src/img/**/*.png'])
		.pipe(gulp.dest('www/img'))
		.pipe(gulp.src(['www/img/**/*.png', '!src/img/sprite/**']))
		.pipe(tinypng('C6qq1g63-RZwKUgLY-jtZLbZzpDN4zi5'))
		.pipe(gulp.dest('www/img'));
});

gulp.task('copy-img', function() {
	gulp.src(['src/img/**/*.*'])
		.pipe(gulp.dest('www/img'));
});

gulp.task('copy-others', function() {
	gulp.src('src/*.txt')
		.pipe(gulp.dest('www'))
		.pipe(gulp.src('src/static/**/*.*'))
		.pipe(gulp.dest('www/static'))
});

gulp.task('usemin', function() {
	gulp.src('src/index.html')
		.pipe(usemin({
			js: [uglify()]
		}))
		.pipe(gulp.dest('www'));
});

gulp.task('build', ['css', 'img', 'usemin', 'copy-others']);
gulp.task('test', ['css', 'copy-img', 'usemin', 'copy-others']);

gulp.task('default', ['build']);
