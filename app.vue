<template>
	<TopBar />
	<div class="main-wrapper">
		<NuxtPage />
	</div>
	<FooterMenu />
</template>
<script setup lang="ts">
useHead({
	htmlAttrs: [
		{ lang: 'ja' },
		{ prefix: 'og: http://ogp.me/ns#' },
	],
	charset: 'utf-8',
	viewport: 'width=device-width, initial-scale=1.0',
	title: 'Photo Gallery',
	meta: [
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:site', content: '@Daiji256' },
		{ name: 'og:site_name', content: 'Photo Gallery' },
	],
	link: [
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossorigin: true,
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Roboto+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
		},
	],
});
</script>
