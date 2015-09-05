var gulp = require('gulp'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    babelify = require('babelify'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    del = require('del'),
    browserSync = require('browser-sync');

/*
  Babel/React/Browserify/Watchify Compilation
*/

// add custom browserify options here
var customOpts = {
  entries: ['./src/js/app.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 
    b.transform(babelify.configure({
      optional: ['es7.decorators'] // Decorator support for Radium
    }));

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'))
}


gulp.task('stylus', function () {
  return gulp.src('./src/stylus/app.styl')
    .pipe(stylus({
      use: [autoprefixer('iOS >= 7', 'last 1 Chrome version')]
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
  gulp.watch('src/stylus/**/*.styl', ['stylus']);
  gulp.watch('src/index.html', ['html']);
  gulp.watch('dist/index.html').on('change', browserSync.reload);
  gulp.watch('dist/bundle.js').on('change', browserSync.reload);
});

gulp.task('serve', function() {
  browserSync({
    server: {
        baseDir: "./dist"
    }
  });
});

gulp.task('clean', function() {
  return del('dist');
})

gulp.task('default', ['html', 'stylus', 'js', 'watch', 'serve']);
