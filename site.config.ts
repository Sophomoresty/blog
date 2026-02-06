import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Sophomores",
	prologue: "记录学习与生活, 分享技术与思考",
	author: {
		name: "Sophomores",
		email: "",
		link: "https://sophomoresty.github.io/blog-thought/"
	},
	description: "记录学习与生活, 分享技术与思考",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2026"
	},
	i18n: {
		locales: ["zh-cn"],
		defaultLocale: "zh-cn"
	},
	pagination: {
		note: 15,
		jotting: 24
	},
	heatmap: {
		unit: "day",
		weeks: 20
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
