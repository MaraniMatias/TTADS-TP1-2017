const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        './node_modules/',
        conf.paths.tmp,
        conf.paths.src
      ]
    },
    open: false
  };
};
