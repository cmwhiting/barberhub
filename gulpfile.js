var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var merge = require('merge-stream');

gulp.task('less', function() {
	var vendorless = gulp.src(['./app/resources/src/vendor/less/**/*.less'])
		.pipe(concat('vendor.less'))
		.pipe(less({ 
			compress: false
		}));

	var mainless = gulp.src(['./app/resources/src/components/**/*.less'])
		.pipe(concat('main.less'))
		.pipe(less({
			compress: false
		}));

	var vendorcss = gulp.src(['./app/resources/src/vendor/less/**/*.css'])
		.pipe(concat('vendor.css'));

	var merged = merge(vendorless, vendorcss, mainless)
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./app/resources/cmp/css'));

	return merged;
});

gulp.task('js', function() {
	gulp.src('./app/resources/src/vendor/js/*.js')
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./app/resources/cmp/js'));
	gulp.src(['./app/resources/src/js/modules.js',
				'./app/resources/src/js/*/**/*.js',
				'./app/resources/src/components/*/js/*.service.js', 
				'./app/resources/src/components/*/js/*.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./app/resources/cmp/js'));
	gulp.src('./app/resources/src/js/app.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./app/resources/cmp/js'));
});

gulp.task('watch', function() {
	gulp.watch(['./app/resources/src/**/*.less', './app/resources/src/**/*.css'], ['less']);
	gulp.watch('./app/resources/src/**/*.js', ['js']);
});

gulp.task('connect', function() {
	connect.server({
		root: 'app'
	});
});

gulp.task('default', ['connect', 'watch', 'js', 'less']);