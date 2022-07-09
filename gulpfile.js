import gulp from "gulp";

// gulp
import { path } from "./gulp/config/path.js";
import { plugins } from './gulp/config/plugins.js'

global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	gulp,
	path,
	plugins
}

// tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
// если будешь использовать pug эти пакеты не нужны
// import { html } from "./gulp/tasks/html.js";
import { pug } from "./gulp/tasks/pug.js";
import { scss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";
import { image } from "./gulp/tasks/images.js";
// import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";

export { svgSprite }

// watch
const watch = () => {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, pug)
	gulp.watch(path.watch.css, scss)
	gulp.watch(path.watch.js, js)
	gulp.watch(path.watch.img, image)
}

// image, copy, pug, scss, js

// const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.parallel(image, copy, pug, scss, js)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watch, server))
const build = gulp.series(reset, mainTasks)

export { dev }
export { build }

// gulp.task("default", copyFiles)
gulp.task("default", dev)

