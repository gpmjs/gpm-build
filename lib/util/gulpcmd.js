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
	  	console.log('   clean           删除目录');
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