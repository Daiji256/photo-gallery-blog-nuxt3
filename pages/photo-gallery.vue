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
const title = 'ギャラリー' + ' - ' + useRuntimeConfig().siteName;
useHead({
	title: title,
	meta: [
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:image', content: useRuntimeConfig().baseUrl + '/images/sample-00-ogp.jpg' },
		{ name: 'og:type', content: 'article' },
		{ name: 'og:title', content: title },
		{ name: 'og:image', content: useRuntimeConfig().baseUrl + '/images/sample-00-ogp.jpg' },
		{ name: 'og:url', content: useRuntimeConfig().baseUrl + useRoute().path },
	],
});

const posts = await queryContent('posts')
	.where({ '_draft': false })
	.sort({ 'date': -1 })
	.only(['_path', 'image'])
	.find();
</script>
