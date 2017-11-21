'use strict';

//dependencies for build
var gulp = require('gulp');
var sass = require('gulp-sass');
var sass_globbing = require('gulp-sass-glob');
var coffee = require('gulp-coffee');
var pug = require('gulp-pug');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var flatten = require('gulp-flatten')
//dependencies for build END
//dependencies for push
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
//dependencies for push END

//settings
var source = 'dev/';
var dest = 'dist/';
//settings END
//build project
gulp.task('sass', function () {
  return gulp.src( source + 'fa-kit.sass' )
	.pipe(sass_globbing() )
	.pipe(sass( { outputStyle: 'compressed' } ).on( 'error', sass.logError ) )
	.pipe(gulp.dest(dest));
});
gulp.task('coffee', function() {
  gulp.src( source + '*.coffee')
    .pipe( coffee( {bare: true} ).on('error', gutil.log) )
    .pipe(gulp.dest( dest ) )
});
gulp.task('pug', function buildHTML() {
	return gulp.src(source+'*.pug')
		.pipe( plumber() )
		.pipe( pug( { pretty: true } ) )
		.pipe( gulp.dest( dest ) );
});
//build project END
//watchers
gulp.task('watch', function(){
	gulp.watch( source+'**/*.sass', ['sass'] ),
	gulp.watch( source+'**/*.pug', ['pug'] ),
	gulp.watch( source+'**/*.coffee', ['coffee'] )
})
//watchers END