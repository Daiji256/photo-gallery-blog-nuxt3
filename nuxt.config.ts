import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	css: ['modern-css-reset'],
	modules: ['@nuxt/content', '@nuxtjs/google-fonts'],
	googleFonts: {
		inject: true,
		download: true,
		families: {
			'Noto Sans JP': [400, 500],
		},
	},
	runtimeConfig: {
		public: {
			siteName: 'Photo Gallery',
			siteDescription: 'このブログは XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX',
			baseUrl: 'https://photo-gallery-blog-nuxt3.vercel.app',
			pickupPosts: ['/posts/dummy01', '/posts/dummy02', '/posts/dummy03'],
		}
	},
})
