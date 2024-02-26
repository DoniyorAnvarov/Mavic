global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),

    path: {
        serverDir: './app/client',
        tasks: require('./gulp/config'),

        src: {
            html: './app/src/*.html',
            style: './app/src/styles/*.*',
            js: './app/src/scripts/*.js',
            img: './app/src/img/*.{jpeg,jpg,png,jfif,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        },
        client: {
            html: './app/client',
            style: './app/client/styles',
            js: './app/client/scripts/',
            img: './app/client/img/',
            fonts: './app/client/fonts/'
        },
        watch: {
            html: ['./app/src/*.html', './app/src/view/*.html'],
            style: './app/src/styles/**/*.*',
            js: './app/src/scripts/*.js',
            img: './app/src/img/**/*.{jpeg,jpg,png,jfif,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        }
    },

    tasks: {
        default: ['html', 'fonts', 'style', 'img', 'js', 'watch', 'server'],
        client: ['html', 'fonts', 'style', 'img', 'js']
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)())


for (const key in $.tasks) {
    $.gulp.task(key, $.gulp.series($.gulp.parallel(...$.tasks[key])))
}
