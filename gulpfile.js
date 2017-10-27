//在gulpfile中载入gulp包,因为这个包提供了一些API
var gulp=require('gulp');
var less=require('gulp-less'); //压缩
var cssnano=require('gulp-cssnano')//css合并
var concat=require('gulp-concat');//js合并
var uglify=require('gulp-uglify');//js 压缩
var htmlmin=require('gulp-htmlmin')
//1.LESS编译 压缩  合并
gulp.task('style',function(){
	//这里是在执行style任务时自动执行的
	gulp.src('src/styles/*.less')
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles'));
})

//2.JS合并 压缩 混淆
gulp.task('script',function(){
	gulp.src('src/scripts/*.js') //取出所有的js
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
})
//3.图片复制
gulp.task('image',function(){
	gulp.src('src/images/*.*')
	.pipe(gulp.dest('dist/images'));
})
//4.html

gulp.task('html',function(){
	gulp.src('src/html/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pile(gulp.dest('dist/html'));
})