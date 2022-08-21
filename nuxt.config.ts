import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	css: ['modern-css-reset'],
	modules: ['@nuxt/content'],
	runtimeConfig: {
		public: {
			siteName: 'Photo Gallery',
			baseUrl: 'https://photo-gallery-blog-nuxt3.vercel.app',
			pickupPosts: ['/posts/dummy01', '/posts/dummy02', '/posts/dummy03'],
		}
	},
})
