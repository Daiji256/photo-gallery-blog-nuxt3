<template>
	<HeaderNavigation />
	<NuxtLayout>
		<NuxtPage />
		<Tags />
	</NuxtLayout>
	<FooterMenu />
</template>
<script setup>
useHead({
	htmlAttrs: [{ lang: 'ja' }],
	meta: [{ charset: 'utf-8' }],
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
