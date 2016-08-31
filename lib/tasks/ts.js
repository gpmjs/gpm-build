// 给静态文件添加时间戳

var gulp = require('gulp');
var fs = require('file-system');

var tasksConfig = require('../util/adapter.js').tasksConfig.ts;
var path = process.env.GPM_INIT_CWD;
var version = Date.now();

function setFilePath(arr){
	arr.forEach(function(item, i){
		arr[i] = path + item;
	});
}

setFilePath(tasksConfig.src);

gulp.task('ts', function(){
	var filterFn = fs.fileMatch(tasksConfig.src, true);
	var replace = [{
			match: /urlArgs:\s*"v=(\d*)"/,
			replacement: function () {
				return 'urlArgs: "v=' + version + '"';
			}
		},{
			match: /((\.js)|(\.css))(\?v=(\d*))*/ig,
			replacement: function (a, b) {
				return b + '?v=' + version + '';
			}
		}];
	var contents = '';

	fs.recurse(path + tasksConfig.dirpath, tasksConfig.fiter, function(filepath, filename){
		if (filterFn(filepath)) {
			contents = fs.readFileSync(filepath, { encoding: 'utf8' });

			replace.forEach(function(item){
				var replacement = item.replacement;
				var match = item.match;

				contents = contents.replace(match, replacement);
			});

			fs.writeFileSync(filepath, contents, { encoding: 'utf8' });
		}
	});
});