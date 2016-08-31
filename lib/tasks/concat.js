/*
 *  合并任务
 *
 */
'use strict';

var gulp = require('gulp');
var concat = require("gulp-concat");
var rev = require('gulp-rev');

var tasksConfig = require('../util/adapter.js').tasksConfig
var cssConfig = tasksConfig.concat.cssConfig;
var jsConfig = tasksConfig.concat.jsConfig;

gulp.task("css-concat", function(){
	return gulp.src(cssConfig.src)
		.pipe(concat(cssConfig.fileName))
		.pipe(rev())
		.pipe(gulp.dest(cssConfig.dest))
		.pipe(rev.manifest())
		.pipe(gulp.dest(tasksConfig.rev.dest))
});

gulp.task("js-concat", function(){
	return gulp.src(jsConfig.src)
		.pipe(concat(jsConfig.fileName))
		.pipe(rev())
		.pipe(gulp.dest(jsConfig.dest))
		.pipe(rev.manifest())
		.pipe(gulp.dest(tasksConfig.rev.dest))
});