<template>
	<div>
		<div v-for="(page, index) in pages" :key="index">
			<nuxt-link :to="page._path">{{ page.title }}</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
const pages = await queryContent('pages')
	.only(['_path', 'title', 'date'])
	.where({ '_draft': false })
	.sort({ 'date': 1 })
	.find();

definePageMeta({
	layout: 'main-wrapper',
});
</script>
