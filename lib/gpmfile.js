/*
 *  打包配置文件
 *
 */

module.exports = function(gpm) {
	'use strict';

	var src = '/public';
	var dest = '/dist';

	// 定义各种tasks 参数
	gpm.initConfig({
		clean: {
			dest: dest
		},
		concat: {
			cssConfig: {
				src: src + '/css/**/*.css',
				dest: dest + '/css',
				fileName: 'normal.css'
			},
			jsConfig: {
				src: src + '/js/**/*.js',
				dest: dest + '/js',
				fileName: 'turtle.js'
			}
		},
		minify: {
			cssConfig: {
				src: src + '/css/**/*.css',
				dest: dest + '/css',
				fileName: 'normal.min.css'
			},
			jsConfig: {
				src: src + '/js/**/*.js',
				dest: dest + '/js',
				fileName: 'turtle.min.js'
			}
		},
		images: {
			src: src + '/images/**/*',
			dest: dest + '/images'
		},
		rev: {
			revJson: dest + '/rev/**/*.json',
			dest: dest + '/rev',
			htmlSrc: '/template/*.html',
			htmlDest: '/template'
		},
		ts: {
			src: ['/template/**/*.html', '/server/views/**/*.html'],
			dirpath: '/',
			fiter: ['**/*.html']
		},
		release: {
			path: '/package.json'
		}
	});

	// 定义具体的任务
	gpm.registerTask('dev', ['ts', 'release']);
	gpm.registerTask('test', ['ts', 'release']);
	gpm.registerTask('qc', ['ts', 'release']);
	gpm.registerTask('online', ['ts', 'release']);
}