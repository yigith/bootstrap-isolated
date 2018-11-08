const { src, dest } = require('gulp');
const { series } = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const minify = require('gulp-minify');
var replace = require('gulp-replace');
const rename = require('gulp-rename');

function copyBootstrapDist() {
	return src('node_modules/bootstrap/dist/**/*')
		.pipe(dest('./dist'));
}

function sassBootstrapIsolated() {
	return src('./sass/bs4.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(replace('.bs4 html', '.bs4'))
	.pipe(replace('.bs4 body', '.bs4'))
	.pipe(rename('bs4.min.css'))
    .pipe(dest('./dist/css'));
}

exports.default = series(copyBootstrapDist, sassBootstrapIsolated);