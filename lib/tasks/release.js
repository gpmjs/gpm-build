var gulp = require('gulp');
var fs=require("fs");

var tasksConfig = require('../util/adapter.js').tasksConfig.release;
var path = process.env.GPM_INIT_CWD;

gulp.task('release', function(){
	var contents = '';
	var filepath = path + tasksConfig.path;

	contents = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
	contents.env = process.env.GPM_TASK;
	fs.writeFileSync(filepath, JSON.stringify(contents), { encoding: 'utf8' });
});
