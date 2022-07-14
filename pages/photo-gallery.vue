<template>
	<div class="photo-gallery">
		<div class="photo-card" v-for="post in posts">
			<NuxtLink v-bind:to="post._path">
				<img v-bind:src="`${post.image}`">
			</NuxtLink>
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
