import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder = "./src"
const buildFolder = "./dist"

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`

	},
	src: {
		html: `${srcFolder}/*.pug`,
		css: `${srcFolder}/scss/index.scss`,
		js: `${srcFolder}/js/app.js`,
		img: `${srcFolder}/img/**/*.{png,jpeg,jpg,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/*.{ttf, otf, eot, otc, ttc, woff, woff2, svg}`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`
	},
	watch: {
		html: `${srcFolder}/**/*.pug`,
		css: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		img: `${srcFolder}/img/**/*.{jpg, jpeg, png, svg, gif, icon, webp}`,
		files: `${srcFolder}/**/*.*`
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
	rootFolder,
	ftp: "",
}
