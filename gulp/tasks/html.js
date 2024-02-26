module.exports = () =>
    $.gulp.task('html', () => {
        return $.gulp.src($.path.src.html)
            .pipe($.gp.fileInclude())
            .pipe($.gulp.dest($.path.client.html))
            .on('end', $.bs.reload)
    })