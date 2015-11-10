var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha');

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 9001
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function(){
        console.log('restarting using Gulp');
    });
});

gulp.task('test', function(){
    gulp.src('Test/*.js', {read:false})
        .pipe(gulpMocha({reporter:'nyan'}))
});