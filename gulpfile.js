/**
 * Created by Administrator on 2017/7/3 0003.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js 压缩插件
var bom = require('gulp-bom'); //解决中文乱码插件
var minifyCss = require('gulp-minify-css'); //css 压缩插件
var minifyHtml = require('gulp-minify-html'); //html 压缩插件
var imagemin = require('gulp-imagemin'); //图片压缩相关插件
var pngquant = require('imagemin-pngquant'); //png 图片压缩插件
var rename = require('gulp-rename'); //重命名插件
//压缩 js
gulp.task('jsTask', function(){
    gulp.src('src/js/*')
    // .pipe(bom())
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'));
});
//压缩 css
gulp.task('cssTask', function(){
    gulp.src('src/css/*')
        .pipe(minifyCss())
        .pipe(gulp.dest('dest/css'));
});
//压缩 html
gulp.task('htmlTask2', function(){
    gulp.src('src/html/*')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dest/html'));
});
//压缩图片
gulp.task('imgTask', function(){
    gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用 pngquant 插件来压缩 png 图片
        }))
        .pipe(gulp.dest('dest/img'));
});
//重命名
gulp.task('renameTask', function(){
    gulp.src('src/js/bullet.js')
        .pipe(uglify())
        .pipe(rename('bullet.min.js'))
        .pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask', 'cssTask', 'htmlTask2', 'imgTask',
    'renameTask']);































// var gulp=require("gulp");
// gulp.task('default',function (){
//     gulp.src("src/js/*.js")//获取文件
//     .pipe(gulp.dest('dest/js'));
// })
// var gulp = require('gulp');
// var uglify = require('gulp-uglify'); //js压缩插件
// //var bom = require('gulp-bom'); //解决中文乱码插件
// var minifyCss = require('gulp-minify-css'); //css压缩插件
// gulp.task('jsTask', function(){
//     gulp.src('src/js/*')
//     //	.pipe(bom())
//         .pipe(uglify())
//         .pipe(gulp.dest('dest/js'));
// });
//
// //压缩css
// gulp.task('cssTask', function(){
//     gulp.src('src/css/*')
//         .pipe(minifyCss())
//         .pipe(gulp.dest('dest/css'));
// });
//
// gulp.task('default', ['jsTask','cssTask']);