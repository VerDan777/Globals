const gulp = require('gulp');
const BrowserSync = require('browser-sync');
const watch = require('gulp-watch');

gulp.task('watch',()=> {
    BrowserSync.init({
        server: {
            baseDir: 'dist'
        }
    })

watch('./src/**/*.pug', ()=> {
    gulp.start("pugChanged");
});
watch('./src/**/*.scss', ()=> {
    gulp.start("CssInject");
});
});

gulp.task("pugChanged",["PugRender"], ()=> {
    BrowserSync.reload();
});
gulp.task("CssInject",["styles"], ()=> {
    gulp.src("./dist/styles.css")
    .pipe(BrowserSync.stream());
})