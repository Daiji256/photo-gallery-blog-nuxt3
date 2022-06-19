<template>
	<TopBar />
	<NuxtLayout>
		<NuxtPage />
		<posts />
		<photo-gallery />
		<tags />
		<about />
		<privacy-policy />
	</NuxtLayout>
	<FooterMenu />
</template>
<script setup>
useHead({
	htmlAttrs: [{ lang: 'ja' }],
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
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
			href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
		},
	],
})
</script>
