'use strict';

//dependencies for build
const gulp = require('gulp');
const sassToCss = require('gulp-sass');
const sassGlobbing = require('gulp-sass-glob');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const { VueLoaderPlugin } = require('vue-loader');
//dependencies for build END

//settings

//settings END
async function style() {
    return gulp
        .src('./sass/fa-kit.sass')
        .pipe(sassGlobbing())
        .pipe(sassToCss().on('error', sassToCss.logError))
        .pipe(gulp.dest('./dist'));
}

function watch() {
    gulp.watch('./sass/**/*.sass', style);
}

exports.style = style
exports.watch = watch

const build = gulp.parallel(style);
const workon = gulp.series(build, watch);

exports.build = build
exports.default = workon
