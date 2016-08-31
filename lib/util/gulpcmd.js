var chalk = require('chalk');
var tasks = require('./tasks.js')();
var registerTasks = require('../util/adapter.js').registerTasks;

for(var i = 0, len = registerTasks.length; i < len; i++){
	tasks.push(registerTasks[i]);
}

var gulpcmd = {
	printHelp : function () {
		console.log(chalk.bold.green('  Package Commands:'));
	  	console.log();
	  	console.log('   default         提示帮助');
	  	console.log('   help            提示帮助');
	  	console.log('   clean           删除目录');
	  	console.log('   css-concat      拼接 css 文件');
	  	console.log('   js-concat       拼接 js 文件');
	  	console.log('   css-minify      压缩 css 文件');
	  	console.log('   js-minify       压缩 js 文件');
	  	console.log('   images          无压缩 (用于开发环境) ');
	  	console.log('   imagemin        压缩图片');
	  	console.log('   rev             更新静态资源缓存（结合css-concat、js-concat、css-minify、js-minify）');
	  	console.log('   ts              更新静态资源缓存（结合require.js，使用时间戳的形式来更新缓存 ）');
	  	console.log();
		console.log(chalk.bold.green('  registerTasks list'));
		console.log();
		for(var i = 0, len = registerTasks.length; i < len; i ++) {
			console.log('   ' + registerTasks[i])
		}
		console.log();
	},
	execCmd: function(task, successCallback, errorCallback){

		for(var i = 0, len = tasks.length; i <len; i ++) {
			if(task == tasks[i]) {
				successCallback();
				return;
			}
		}

		errorCallback();
	}
}

module.exports = gulpcmd;