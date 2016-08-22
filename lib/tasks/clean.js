/*
 *  删除目录任务
 *
 */
'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../../config');
var dist = config.clean.dist;

gulp.task('clean', function(){
	return gulp.src(dist)
		.pipe(clean());
});