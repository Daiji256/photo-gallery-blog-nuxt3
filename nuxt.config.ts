import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	css: ['modern-css-reset'],
	modules: ['@nuxt/content'],
	runtimeConfig: {
		public: {
			pickupPosts: ['/posts/dummy01', '/posts/dummy02', '/posts/dummy03'],
		}
	},
})
