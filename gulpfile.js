const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin'); 
const htmlmin = require('gulp-htmlmin'); 
const webpack = require("webpack-stream");

const dist = "./dist/"

// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });

    gulp.watch('./src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp
        .src('./src/sass/**/*.+(scss|sass|css)')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename({ prefix: '', suffix: '.min' }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp
        .src('./src/*.html')
         .pipe(htmlmin({ collapseWhitespace: true }))
         .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function () {
    return gulp.src('./src/js/**/*.js').pipe(gulp.dest('./dist/js'));
});

gulp.task('fonts', function () {
    return gulp.src('./src/fonts/**/*').pipe(gulp.dest('./dist/fonts'));
});

gulp.task('icons', function () {
    return gulp.src('./src/icons/**/*').pipe(gulp.dest('./dist/icons'));
});

  gulp.task('images', function () {
  return gulp.src('./src/img/**/*').pipe(imagemin()).pipe(gulp.dest('./dist/img'));
}); 

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
    gulp.watch('./src/*.html').on('change', gulp.parallel('html'));
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);
});


gulp.task(
    'default',
    gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'fonts', 'icons','html', 'images')
);

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browserSync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: ["@babel/preset-env"]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browserSync.reload);
});

    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));

gulp.task("build", gulp.parallel('copy-html', "build-js"));

