var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');
var babelify = require("babelify");

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    //.pipe(browserify({transform: ['reactify', 'babelify']}))
    .pipe(browserify({transform: ['reactify']}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('../public/js'));
});

gulp.task('less', function () {
  gulp.src('./src/css/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('../public/css'));
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('../public'));
  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('../public/assets'));
  gulp.src('node_modules/react-select/dist/default.css')
    .pipe(gulp.dest('../public/css'));
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('../public/css'));
  gulp.src('bower_components/bootstrap/dist/fonts/*')
    .pipe(gulp.dest('../public/fonts'));
  gulp.src('bower_components/fuelux/dist/css/fuelux.min.css')
    .pipe(gulp.dest('../public/css'));
  gulp.src('bower_components/fuelux/dist/fonts/*')
    .pipe(gulp.dest('../public/fonts'));
  gulp.src('src/js/offline.min.js')
    .pipe(gulp.dest('../public/js'));
  gulp.src('src/css/offline-theme-slide-indicator.css')
    .pipe(gulp.dest('../public/css'));
  gulp.src('src/css/offline-language-english-indicator.css')
    .pipe(gulp.dest('../public/css'));
  gulp.src('src/css/font-awesome.css')
    .pipe((gulp.dest('../public/css')));
  gulp.src('src/fonts/**/*.*')
    .pipe((gulp.dest('../public/fonts')));
  gulp.src('src/css/demo.css')
    .pipe((gulp.dest('../public/css')));
  gulp.src('src/css/icons.css')
    .pipe((gulp.dest('../public/css')));
  gulp.src('src/css/component.css')
    .pipe((gulp.dest('../public/css')));
  gulp.src('src/js/modernizr.custom.js')
    .pipe((gulp.dest('../public/js')));
  gulp.src('src/js/classie.js')
    .pipe((gulp.dest('../public/js')));
  gulp.src('src/js/mlpushmenu.js')
    .pipe((gulp.dest('../public/js')));
  gulp.src('bower_components/underscore/underscore-min.js')
    .pipe(gulp.dest('../public/js'));
  gulp.src('node_modules/mprogress/mprogress.min.css')
    .pipe((gulp.dest('../public/css')));
  gulp.src('node_modules/mprogress/mprogress.min.js')
    .pipe((gulp.dest('../public/js')));
  gulp.src('node_modules/react-ladda/node_modules/ladda/dist/ladda.min.css')
    .pipe((gulp.dest('../public/css')));
});

gulp.task('default', ['browserify', 'less', 'copy']);

// gulp.task('watch', function () {
//   gulp.watch('src/**/*.*', ['default', browserSync.reload]).on('change', reportChange);
// });
gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default']);
});
