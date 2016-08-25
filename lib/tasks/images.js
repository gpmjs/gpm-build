/*
 *  图片任务
 *
 */
'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var tasksConfig = require('../util/adapter.js').tasksConfig.images;

gulp.task('images', function(){
	return gulp.src(tasksConfig.src)
		.pipe(gulp.dest(tasksConfig.dest))
});

gulp.task('imagemin', function(){
	return gulp.src(tasksConfig.src)
		.pipe(imagemin({
			progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest(tasksConfig.dest))
});