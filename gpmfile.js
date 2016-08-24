/*
 *  打包配置文件
 *
 */

module.exports = function(gpm) {
	'use strict';

	// 定义各种tasks 参数
	gpm.initConfig({
		clean: {
			dest: './test/dist' // 目录
		}
	});

	// 定义具体的任务
	gpm.registerTask('dev', ['less']);
	gpm.registerTask('online', ['watch']);
}