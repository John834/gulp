import fs from "fs";
import fonter from "gulp-fonter";
import woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
	// ищем фалйы otf
	return app.gulp.src(`${app.path.src.fonts}/*.otf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify({
				title: "fonts otf",
				message: "Error <%= error.message %>"
			})
		))
		// ковертируем в ttf
		.pipe(fonter({
			formats: ["ttf"]
		}))
		.pipe(app.gulp.dest(app.path.src.fonts))
}

export const ttfToWoff = () => {
	// ищем файлы ttf
	return app.gulp.src(`${app.path.src.fonts}*.ttf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify({
				title: "fonts",
				message: "Error <%= error.message %>"
			})
		))
		// ковертируем в woff
		.pipe(fonter({
			formats: ["woff"]
		}))
		.pipe(app.gulp.dest(app.path.build.fonts))
		app.gulp.src(`${app.path.src.fonts}*.ttf`, {})
		.pipe(woff2())
		.pipe(app.gulp.dest(app.path.build.fonts))
}

export function fontsStyle(params) {
	const srcFolder = "./src"
	let file_content = fs.readFileSync(srcFolder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(srcFolder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(srcFolder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
}

function cb() { }