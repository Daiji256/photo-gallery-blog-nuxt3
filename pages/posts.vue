<template>
	<div class="post-cards">
		<div class="post-card" v-for="(page, index) in pages" v-bind:key="index">
			<nuxt-link v-bind:to="page._path">
				<img src="/images/sample-20.jpg">
				<div class="title">{{ page.title }}</div>
				<div class="tags">{{ page.tags }}</div>
				<div class="date">{{ page.date }}</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
const pages = await queryContent('pages')
	.only(['_path', 'title', 'date', 'tags'])
	.where({ '_draft': false })
	.sort({ 'date': 1 })
	.find();

definePageMeta({
	layout: 'main-wrapper',
});
</script>
