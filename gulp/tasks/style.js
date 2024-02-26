module.exports = () =>
$.gulp.task('style', () => {
    return $.gulp.src($.path.src.style)
    .pipe($.sass())
    .pipe($.gp.autoprefixer())
    .pipe($.gp. groupCssMediaQueries())
    .pipe($.gp.rename({extname: '.css'}))
    .pipe($.gulp.dest($.path.client.style))
    .on('end', $.bs.reload)
})