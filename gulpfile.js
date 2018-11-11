var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
		uglify = require('gulp-uglify-es').default,
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS = require('gulp-clean-css'),
		imagemin = require('gulp-imagemin');


gulp.task('js', function() {
	return gulp.src([
			'app/libs/jquery/*.js',
			'app/libs/particles/particles.js',
			'app/js/main.js'
		]) 
		.pipe(uglify())
		.pipe(concat('common.min.js'))
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.stream());
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(autoprefixer({
			browsers: ['last 15 versions'], 
		}))
		.pipe(rename("main.min.css"))
  	.pipe(gulp.dest('app/css'))
  	.pipe(browserSync.stream())
});

gulp.task('serve', function() {
  browserSync.init({ 
    server: 'app'
  }); 
});

gulp.task('watch', ['serve', 'sass', 'js'], function() {
  gulp.watch('app/sass/**/*.sass', ["sass"])
  	.on('change', browserSync.reload);
  gulp.watch("app/*.html", ["sass"])
		.on('change', browserSync.reload);
	gulp.watch('app/js/*.js', ["js"])
		.on('change', browserSync.reload);
});

gulp.task('default', ['watch']);

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});

gulp.task('build', ['imagemin', 'sass', 'js'], function() {
	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
	
	var buildCss = gulp.src('app/css/main.min.css')
		.pipe(gulp.dest('dist/css'));

	var buildHtml = gulp.src('app/html/**/*html')
		.pipe(gulp.dest('dist'))

	var buildJs = gulp.src('app/js/common.min.js')
		.pipe(gulp.dest('dist/js'));
	
	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
	
	var buildWebFonts = gulp.src('app/webfonts/*')
		.pipe(gulp.dest('dist/webfonts'));
});