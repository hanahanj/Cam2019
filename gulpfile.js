'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-connect-php': 'connect',
    'gulp-minify-css': 'minify'
  }
});
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = {
  hostname: '127.0.0.1',
  port: '8000'
};

gulp.task('styles', function () {
  return gulp.src([
    'assets/css/all.css'
  ])
    .pipe($.sourcemaps.init())
    .pipe($.minify())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function () {
  var scripts = [
    {
      src: ['assets/js/main.js'],
      dest: 'assets/js',
      concat: 'main.js'
    },
    {
      src: ['assets/js/templates/home.js'],
      dest: 'assets/js/templates',
      concat: 'home.js'
    },
    {
      src: ['assets/js/templates/projects.js'],
      dest: 'assets/js/templates',
      concat: 'projects.js'
    }
  ];

  for (var i in scripts) {
    var script = scripts[i];
    gulp.src(script.src)
      .pipe($.sourcemaps.init())
      .pipe($.concat(script.concat))
      .pipe($.uglify())
      .pipe($.rename({suffix: '.min'}))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(script.dest))
      .pipe(reload({stream: true}));
  }

});

gulp.task('serve', ['styles', 'scripts'], function () {
  $.connect.server({
    hostname: config.hostname,
    port: config.port,
    base: '.'
  }, function() {
    console.log('PHP server initialized, starting BrowserSync');
    browserSync({
      proxy: config.hostname + ':' + config.port,
      notify: true,
      tunnel: false
    });
  });

  // watch for changes
  gulp.watch([
    'content/**/*',
    'site/**/*.php',
    'assets/images/**/*'
  ]).on('change', reload);

  gulp.watch('assets/css/**/*.css', ['styles']);
  gulp.watch('assets/js/src/**/*.js', ['scripts']);
});

gulp.task('default', ['serve']);
