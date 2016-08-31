/*
 *  压缩任务
 *
 */
'use strict';

var gulp = require("gulp");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rev = require('gulp-rev');

var tasksConfig = require('../util/adapter.js').tasksConfig;
var cssConfig = tasksConfig.minify.cssConfig;
var jsConfig = tasksConfig.minify.jsConfig;

gulp.task('css-minify', function(){
	return gulp.src(cssConfig.src)
		.pipe(minifyCss({keepBreaks: true}))
		.pipe(concat(cssConfig.fileName))
		.pipe(rev())
		.pipe(gulp.dest(cssConfig.dest))
		.pipe(rev.manifest())
		.pipe(gulp.dest(tasksConfig.rev.dest));
});

gulp.task('js-minify', function(){
	return gulp.src(jsConfig.src)
		.pipe(concat(jsConfig.fileName))
		.pipe(rev())
		.pipe(uglify())
    	.pipe(gulp.dest(jsConfig.dest))
    	.pipe(rev.manifest())
    	.pipe(gulp.dest(tasksConfig.rev.dest));
});