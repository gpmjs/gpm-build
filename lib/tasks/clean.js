/*
 *  删除目录任务
 *
 */
'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var tasksConfig = require('../util/adapter.js').tasksConfig;
var dist = tasksConfig.clean.dest;

gulp.task('clean', function(){
	return gulp.src(dist)
		.pipe(clean());
});