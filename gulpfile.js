var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var hygienist   = require('hygienist-middleware');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build', '--drafts', '--config', ['_config.yml', '_config_dev.yml']], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    notify: false,
    open: false,
    server: {
      baseDir: '_site',
      middleware: hygienist('_site')
    }
  });
});

/**
 * Watch html/md files, run jekyll & reload BrowserSync
 * if you add folder for pages, collection or datas, add them to this list
 */
gulp.task('watch', function () {
 gulp.watch(['./*', '_layouts/*', '_includes/*', '_posts/*', '_drafts/*', '_sass/**/*', '_assets/**/*', 'css/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
