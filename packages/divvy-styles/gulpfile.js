const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');

const SRC_DIR = 'src';
const DEST_DIR = 'css';
const SCSS_GLOB = `${SRC_DIR}/**/*.scss`;

function css() {
  return src(SCSS_GLOB)
    .pipe(scss())
    .pipe(autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions',
        'ie >= 9'
      ],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(dest(DEST_DIR))
}

function watchAll() {
  console.log('watching all...');
  console.log('SCSS_GLOB', SCSS_GLOB);
  watch(SCSS_GLOB, series(css)); 
}

exports.default = watchAll;
exports.compile = css;
