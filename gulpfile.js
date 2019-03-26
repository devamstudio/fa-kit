'use strict';

//dependencies for build
const gulp = require('gulp');
const sassToCss = require('gulp-sass');
const sassGlobbing = require('gulp-sass-glob');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
var flatten = require('gulp-flatten');
//dependencies for build END

//settings
var sass = 'sass/';
var js = 'js/';
var dest = 'dist/';
var test = 'test/';
//settings END
async function style() {
	return gulp
		.src( sass + 'fa-kit.sass' )
		.pipe( sassGlobbing() )
		.pipe( sassToCss().on( 'error', sassToCss.logError ) )
		.pipe( gulp.dest( dest ) );
}

function markup() {
	return gulp
		.src(test+'pug/**/*.pug')
		.pipe( plumber() )
		.pipe( pug( { pretty: true } ) )
		.pipe( gulp.dest( test ) );
}
//build project END

function watch() {
	gulp.watch(sass+'**/*.sass', style);
	gulp.watch(test+'**/*.pug', markup);
}

exports.style = style
exports.markup = markup
exports.watch = watch

const build = gulp.series(gulp.parallel(style, markup));
const workon = gulp.series(build, watch);

exports.build = build
exports.default = workon