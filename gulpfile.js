'use strict';

//dependencies for build
var gulp = require('gulp');
var sass = require('gulp-sass');
var sass_globbing = require('gulp-sass-glob');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var flatten = require('gulp-flatten');
//dependencies for build END

//settings
var source = 'dev/';
var dest = 'dist/';
var test = 'test/';
//settings END
//build project
gulp.task('sass', function () {
  return gulp.src( source + 'fa-kit.sass' )
	.pipe( sass_globbing() )
	  .pipe( sass().on( 'error', sass.logError ) )
	.pipe( gulp.dest( dest ) );
});
gulp.task('pug', function buildHTML() {
	return gulp.src(source+'*.pug')
		.pipe( plumber() )
		.pipe( pug( { pretty: true } ) )
		.pipe( gulp.dest( test ) );
});
//build project END
//watchers
gulp.task('watch', function(){
	gulp.watch( source+'**/*.sass', ['sass'] ),
	gulp.watch( source+'**/*.pug', ['pug'] )
})
//watchers END