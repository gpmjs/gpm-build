/*
 *  gpm-bulid 命令说明
 */
'use strict';

var gulp = require('gulp');

gulp.task('help', function(){
	console.log('gulp build   文件打包');
	console.log('gulp help    参数说明');
	console.log('gulp clean   删除文件目录');
});