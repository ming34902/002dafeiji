/**
 * Created by Administrator on 2017/7/3 0003.
 */
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6תes5
var uglify = require('gulp-uglify'); //js ѹ�����
var bom = require('gulp-bom'); //�������������
var minifyCss = require('gulp-minify-css'); //css ѹ�����
var minifyHtml = require('gulp-minify-html'); //html ѹ�����
var imagemin = require('gulp-imagemin'); //ͼƬѹ����ز��
var pngquant = require('imagemin-pngquant'); //png ͼƬѹ�����
var rename = require('gulp-rename'); //���������


// //ѹ�� js
gulp.task('jsTask', function(){
    gulp.src('src/js/*')
        .pipe(babel({presets:['es2015']})) //es6תes5
        .pipe(uglify()) //jsѹ��
        .pipe(gulp.dest('dest/js'));
});
//ѹ�� css
gulp.task('cssTask', function(){
    gulp.src('src/css/*')
        .pipe(minifyCss())
        .pipe(gulp.dest('dest/css'));
});
//ѹ�� html
gulp.task('htmlTask2', function(){
    gulp.src('src/html/*')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dest/html'));
});
//ѹ��ͼƬ
gulp.task('imgTask', function(){
    gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //ʹ�� pngquant �����ѹ�� png ͼƬ
        }))
        .pipe(gulp.dest('dest/img'));
});
//������
gulp.task('renameTask', function(){
    gulp.src('src/js/bullet.js')
        .pipe(babel({presets:['es2015']})) //es6תes5
        .pipe(uglify())
        .pipe(rename('bullet.min.js'))
        .pipe(gulp.dest('dest/js'));
});
// gulp.task('default', ['jsTask', 'cssTask', 'htmlTask2', 'imgTask',
//     'renameTask']);

gulp.task('default', ['jsTask','cssTask', 'htmlTask2', 'imgTask','renameTask']);






























// var gulp=require("gulp");
// gulp.task('default',function (){
//     gulp.src("src/js/*.js")//��ȡ�ļ�
//     .pipe(gulp.dest('dest/js'));
// })
// var gulp = require('gulp');
// var uglify = require('gulp-uglify'); //jsѹ�����
// //var bom = require('gulp-bom'); //�������������
// var minifyCss = require('gulp-minify-css'); //cssѹ�����
// gulp.task('jsTask', function(){
//     gulp.src('src/js/*')
//     //	.pipe(bom())
//         .pipe(uglify())
//         .pipe(gulp.dest('dest/js'));
// });
//
// //ѹ��css
// gulp.task('cssTask', function(){
//     gulp.src('src/css/*')
//         .pipe(minifyCss())
//         .pipe(gulp.dest('dest/css'));
// });
//
// gulp.task('default', ['jsTask','cssTask']);