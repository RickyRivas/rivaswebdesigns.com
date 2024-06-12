import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","admin/config.yml","admin/index.html","contactside.jpg","favicon.png","fonts/.DS_Store","fonts/Mona-Sans-Medium.woff","fonts/Mona-Sans-Medium.woff2","fonts/Mona-Sans-MediumItalic.woff","fonts/Mona-Sans-MediumItalic.woff2","fonts/Mona-Sans-Regular.woff","fonts/Mona-Sans-Regular.woff2","fonts/Mona-Sans-RegularItalic.woff","fonts/Mona-Sans-RegularItalic.woff2","fonts/Mona-Sans-SemiBold.woff","fonts/Mona-Sans-SemiBold.woff2","fonts/Mona-Sans-SemiBoldItalic.woff","fonts/Mona-Sans-SemiBoldItalic.woff2","homeabout.jpg","laptop.svg","og.jpg","portfolio/inkbro-phone.jpg","portfolio/inkbro-slide.jpg","rickyrivas.jpg","scripts/swiper.min.js","uploads/contactside.jpg","uploads/thumb.jpg","video/.DS_Store","video/hero-video.mp4"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".jpg":"image/jpeg",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml",".js":"text/javascript",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.C3ABxd9A.js","app":"_app/immutable/entry/app.Bat_xmr3.js","imports":["_app/immutable/entry/start.C3ABxd9A.js","_app/immutable/chunks/entry.CDngjC46.js","_app/immutable/chunks/scheduler.CzFAJfHp.js","_app/immutable/entry/app.Bat_xmr3.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.CzFAJfHp.js","_app/immutable/chunks/index.ihCg-pK8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[post]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
