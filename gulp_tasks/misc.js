const path = require('path');

const gulp = require('gulp');
const pug = require('gulp-pug');
const jsdoc = require('gulp-jsdoc3');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);

gulp.task('views', function buildHTML() {
  return gulp.src('./src/index.pug')
  .pipe(pug({/* options */}))
  .pipe(gulp.dest('./src'));
});

gulp.task('docs', function(cb) {
  let config = require('../conf/jsdoc.conf.json');
  gulp.src(['./README.md', './src/**/*.vue','./src/**/*.js','./docs/README.md'], {
      read: !false
    })
    .pipe(jsdoc(config,cb));
});

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());
  // agregdo para pug
  process.env.NODE_ENV = "production";
  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{less,js,html,vue}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
