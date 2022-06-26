import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	css: ['modern-css-reset', '~/assets/scss/main.scss'],
	modules: ['@nuxt/content'],
	runtimeConfig: {
		public: {
			pickupPosts: ['/posts/test01', '/posts/test02', '/posts/test03'],
		}
	},
})
