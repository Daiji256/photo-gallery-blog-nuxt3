<template>
	<div class="post-cards">
		<div class="post-card" v-for="(post, index) in posts" v-bind:key="index">
			<nuxt-link v-bind:to="post._path">
				<img src="/images/sample-20.jpg">
				<div class="title">{{ post.title }}</div>
				<div class="tags">{{ post.tags }}</div>
				<div class="date">{{ post.date }}</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
const posts = await queryContent('posts')
	.only(['_path', 'title', 'date', 'tags'])
	.where({ '_draft': false })
	.sort({ 'date': 1 })
	.find();
</script>
