<template>
	<div class="photo-gallery">
		<div class="photo-card" v-for="post in posts">
			<nuxt-link v-bind:to="post._path">
				<img v-bind:src="`${post.image}`">
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
const posts = await queryContent('posts')
	.where({ '_draft': false })
	.sort({ 'date': -1 })
	.only(['_path', 'image'])
	.find();
</script>
