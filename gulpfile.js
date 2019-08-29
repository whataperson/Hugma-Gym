'use strict'

const gulp = require("gulp")
const sass = require("gulp-sass")
const plumber = require("gulp-plumber")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const server = require("browser-sync").create()
const sourcemaps = require("gulp-sourcemaps")
const watch = require("gulp-watch")


gulp.task("sass-compile", function() {
    return gulp.src("./sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("./css/"))
        .pipe(plumber())
});

gulp.task("watch", function(){
    gulp.watch("./sass/**/*.scss", gulp.series("sass-compile"))
})
