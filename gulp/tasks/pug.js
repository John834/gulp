import webpHtmlNoSvg from "gulp-webp-html-nosvg";
import version from "gulp-version-number";
import pugg from "gulp-pug"

export const pug = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "PUG",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(pugg({
			// Сжатие файла
			pretty: true,
			// Показывать в терминале какой файл обработан
			verbose: true
		}))
		.pipe(version({
			"value": "%DT%",
			"append": {
				"key": "_v",
				"cover": 0,
				"to": ["css", "js"]
			},
			"output": {
				"file": "gulp/version.json"
			}
		}))
		.pipe(webpHtmlNoSvg())
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream())
}