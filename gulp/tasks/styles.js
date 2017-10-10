const gulp = require('gulp');
const sass = require('gulp-sass');
const SassImporter = require('sass-module-importer');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',()=> {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({importer: SassImporter()})).on('error',notify.onError(function(error) {
        return {
            title: "styles",
            message: error.message
        };
    }))
    .pipe(gulp.dest("./dist/"));
})