/*
 *  合并任务
 *
 */
'use strict';

var gulp = require('gulp');
var concat = require("gulp-concat");
var tasksConfig = require('../util/adapter.js').tasksConfig.concat;
var cssConfig = tasksConfig.cssConfig;
var jsConfig = tasksConfig.jsConfig;

gulp.task("css-concat", function(){
	return gulp.src(cssConfig.src)
		.pipe(concat(cssConfig.fileName))
		.pipe(gulp.dest(cssConfig.dest));
});

gulp.task("js-concat", function(){
	return gulp.src(jsConfig.src)
		.pipe(concat(jsConfig.fileName))
		.pipe(gulp.dest(jsConfig.dest));
});