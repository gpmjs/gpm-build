/*
 *  压缩任务
 *
 */
'use strict';

var gulp = require("gulp");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

var tasksConfig = require('../util/adapter.js').tasksConfig.minify;
var cssConfig = tasksConfig.cssConfig;
var jsConfig = tasksConfig.jsConfig;

gulp.task('css-minify', function(){
	return gulp.src(cssConfig.src)
		.pipe(minifyCss({keepBreaks: true}))
		.pipe(concat(cssConfig.fileName))
		.pipe(gulp.dest(cssConfig.dest));
});

gulp.task('js-minify', function(){
	return gulp.src(jsConfig.src)
		.pipe(concat(jsConfig.fileName))
		.pipe(uglify())
    	.pipe(gulp.dest(jsConfig.dest));
});