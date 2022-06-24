<template>
	<TopBar />
	<div class="main-wrapper">
		<NuxtPage />
	</div>
	<FooterMenu />
</template>
<script setup>
useHead({
	htmlAttrs: [{ lang: 'ja' }],
	meta: [
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
			href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700',
		},
	],
})
</script>
