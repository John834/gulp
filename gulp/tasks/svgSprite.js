
import svgsprites from "gulp-svg-sprite";

export const svgSprite = () => {
	return app.gulp.src(app.path.src.svgicons, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG sprite",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(svgsprites({
			mode: {
				stack: {
					sprite: "../icons/icons.svg",
					// Создавать страницу с перечнем икинок
					example: true
				}
			}
		}))
		.pipe(app.gulp.dest(app.path.build.img))
}