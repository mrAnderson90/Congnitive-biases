const { parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
	console.log('Компиляция Scss');
	return src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(dest('build/styles/'));
};

const buildPug = () => {
	console.log('Компиляция Pug');
	return src('app/pages/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(dest('build/'));
};

const watchers = () => {
	watch('app/scss/**/*.scss', buildSass);
	watch('app/pages/**/*.pug', buildPug);
}

exports.build = parallel(buildSass, buildPug);
exports.watchers = watchers;