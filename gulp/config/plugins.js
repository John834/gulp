import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import IfPlugin from "gulp-if"

export const plugins = {
	plumber,
	notify,
	browsersync,
	newer,
	if: IfPlugin
}