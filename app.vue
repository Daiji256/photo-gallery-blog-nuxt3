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
})
</script>
