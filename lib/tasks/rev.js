var gulp = require('gulp');
var rev = require('gulp-rev');
var revCollector = require("gulp-rev-collector");

var tasksConfig = require('../util/adapter.js').tasksConfig.rev;

gulp.task('rev', function () {
    return gulp.src([tasksConfig.revJson, tasksConfig.htmlSrc])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest(tasksConfig.htmlDest));
});

//替换路径
// .pipe( revCollector({
//     replaceReved: true,
//     dirReplacements: {
//         'css': '/dist/css/',
//         'js/': '/dist/js/',
//         'cdn/': function(manifest_value) {
//             return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
//         }
//     }
// }) )