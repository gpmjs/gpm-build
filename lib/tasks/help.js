/*
 *  gpm-bulid 命令说明
 */
'use strict';

var gulp = require('gulp');

gulp.task('help', function(){
  	console.log('   default         提示帮助');
  	console.log('   help            提示帮助');
  	console.log('   clean           删除目录');
  	console.log('   css-concat      拼接 css 文件');
  	console.log('   js-concat       拼接 js 文件');
  	console.log('   css-minify      压缩 css 文件');
  	console.log('   js-minify       压缩 js 文件');
  	console.log('   images          无压缩 (用于开发环境) ');
  	console.log('   imagemin        压缩图片');
});