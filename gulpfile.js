const   gulp = require('gulp'),
        browserSync = require('browser-sync').create(),
        ext_replace = require('gulp-ext-replace'),
        markdown = require('gulp-markdown'),
        reload = browserSync.reload,
        autoprefixer = require('gulp-autoprefixer'),
        sourcemaps = require('gulp-sourcemaps'),
        sass = require('gulp-sass'),
        imagemin = require('gulp-imagemin'),
        // cache = require('gulp-cache'),
        sassLint = require('gulp-sass-lint'),
        order = require("gulp-order"),
        concat = require('gulp-concat')
        imageResize = require('gulp-image-resize'),
        cleanCSS = require('gulp-clean-css');;





//BROWSER SYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});





// MARKDOWN COMPILER
gulp.task('md', function() {
    gulp.src('./src/cases/*.md')
    .pipe(markdown({
        smartypants: true
    }))
    .pipe(ext_replace('.html'))
    .pipe(gulp.dest('./src/cases'))
});





// SERVE HTML
gulp.task('html', function() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
});





// SERVE JS
gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'))
});





// SERVE FONTS
gulp.task('fonts', function() {
    return gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'))
});





// SERVE VIDEOS
gulp.task('videos', function() {
    return gulp.src('./src/videos/*.*')
    .pipe(gulp.dest('./dist/videos'))
});





// COMPILE AND SERVE CSS
gulp.task('styles', function () {
    return gulp.src([
            // setup
            './src/styles/_variables.scss',
            './src/styles/_fixed.scss',
            './src/styles/_include-media.scss',
            './src/styles/_mixins.scss',
            './src/styles/_fonts.scss',
            './src/styles/_rhythm.scss',

            // Blocks
            './src/styles/block/**/*.scss',

            // Layout
            './src/styles/layout/**/*.scss',

            // Projects
            './src/styles/projects/**/*.scss',
        ])
        .pipe(sassLint({
            rules: {
                'no-extends': 1,
                'no-color-keywords': 2,
                'class-name-format': [
                    1,
                    {
                        convention: 'hyphenatedbem'
                    }
                ],
                indentation: [
                    1,
                    {
                        character: 'space',
                        size: 4,
                    }
                ]
            }
        }))
        .pipe(concat('styles.scss'))
        .pipe(sassLint.format())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
});





// COMPILE AND SERVE PROD CSS
gulp.task('styles-prod', function () {
    return gulp.src([
            // setup
            './src/styles/_variables.scss',
            './src/styles/_fixed.scss',
            './src/styles/_include-media.scss',
            './src/styles/_mixins.scss',
            './src/styles/_fonts.scss',
            './src/styles/_rhythm.scss',

            // Blocks
            './src/styles/block/**/*.scss',

            // Layout
            './src/styles/layout/**/*.scss',

            // Projects
            './src/styles/projects/**/*.scss',
        ])
        .pipe(concat('styles.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/styles'))
});




// COMPRESS AND SERVE IMG
gulp.task('images', function(){
    return gulp.src('./src/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imageResize({ width: 720 }))
    .pipe(imagemin())
    // .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'))
});





// WATCH FOR FILES
gulp.task('watch', ['browser-sync', 'styles'], function() {
    gulp.watch('./src/**/*.html', ['html']).on('change', reload);
    gulp.watch('./src/js/**/*.js', ['js']).on('change', reload);
    gulp.watch('./src/videos/**/*.*', ['videos']);
    gulp.watch('./src/styles/**/*.scss', ['styles']);
    gulp.watch('./src/images/**/*.+(png|jpg|gif|svg)', ['images']);
});





// INITIAL SETUP
gulp.task('serve',['browser-sync', 'html', 'js', 'fonts', 'videos', 'styles', 'images', 'watch'], function() {});




gulp.task('default', ['serve']);