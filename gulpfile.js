const path = require('path');

// Gulp
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const runSequence = require('run-sequence');
const typescript = require('typescript');

// Directories
const paths = {};

paths.root = path.join(__dirname, '.');
paths.src = path.join(paths.root, 'src');
paths.dist = path.join(paths.root, 'dist');

// Default Task
gulp.task('default', ['build']);

// Build App
gulp.task('build', function (callback) {
    runSequence(
        ['compile', 'copy-files'],
        callback
    );
});

// Compile TS files
gulp.task('compile', function () {
    const compileSrc = path.join(paths.src, '**', '*.ts');
    const compileDest = paths.dist;
    const tsConfigPath = path.join(paths.root, 'tsconfig.json');
    
    const tsProject = plugins.typescript.createProject(tsConfigPath, {typescript});
    
    return gulp.src(compileSrc)
        .pipe(plugins.sourcemaps.init())
        .pipe(tsProject())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(plugins.cached('ts_source'))
        .pipe(plugins.debug({title: 'emitted:'}))
        .pipe(gulp.dest(compileDest));
});

gulp.task('copy-files', function () {
    const extsToCopy = [
        '.d.ts'
    ];
    
    const filesToCopy = extsToCopy
        .map(ext => `${paths.src}/**/*${ext}`);
    
    return gulp.src(filesToCopy)
        .pipe(plugins.cached('copy_source'))
        .pipe(plugins.debug({title: 'copied:'}))
        .pipe(gulp.dest(paths.dist));
});

// Watch
gulp.task('watch', ['compile', 'copy-files'], function () {
    const filesToWatch = path.join(paths.src, '**');
    
    plugins.watch(filesToWatch, () => {
        runSequence(['compile', 'copy-files']);
    });
});