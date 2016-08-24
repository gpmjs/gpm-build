var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var tasks = require('./tasks.js')(); // 任务组

var registerTasks = [];
var tasksConfig = {};
var gpm = {
	initConfig: function(param){
		tasksConfig = param;
	},
	registerTask: function(taskName, parts){
		var isCheck = this.checkTask(taskName);

		if(isCheck) {
			console.log(taskName + '任务已存在！');
      		process.exit();
		}
		gulp.task(taskName, gulpsync.sync(parts || []));
	},
	checkTask: function(task) {
		var result = false;

		tasks.forEach(function(item, i){
			if (task == item) {
				result = true;
				return;
			}
		});

		registerTasks.push(task);

		return result;
	}
}

require('../gpmfile.js')(gpm);

module.exports = {
	tasksConfig: tasksConfig,
	registerTasks: registerTasks
};