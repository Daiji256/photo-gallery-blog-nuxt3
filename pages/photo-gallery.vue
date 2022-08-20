<template>
	<div class="photo-gallery">
		<NuxtLink class="photo-card" v-for="post in posts" v-bind:to="post._path">
			<img v-bind:src="`${post.image}`" loading="lazy">
		</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variable';

.photo-gallery {
	display: flex;
	flex-wrap: wrap;

	.photo-card {
		width: 50%;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		@media screen and (min-width: $screen-small-min) {
			width: calc(100% / 3);
		}

		img {
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
		}
	}
}
</style>

<script setup lang="ts">
useHead({
	title: "ギャラリー" + ' - ' + useRuntimeConfig().siteName
});

const posts = await queryContent('posts')
	.where({ '_draft': false })
	.sort({ 'date': -1 })
	.only(['_path', 'image'])
	.find();
</script>
