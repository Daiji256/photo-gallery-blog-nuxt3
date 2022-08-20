<template>
	<div>
		<div class="photo-slider">
			<div v-for="(image, index) in images">
				<img v-bind:src="image" class="slider-image"
					v-bind:class='{ "fadein": isFadein(index), "fadeout": !isFadein(index) }'>
			</div>
		</div>
		<div class="icon">
			<img class="icon-image" src="/icons/icon.svg">
		</div>
		<!-- TODO: -->
		<div class="site-name">{{ siteName }}</div>
		<div class="site-description">
			このブログは
			XXX XXX XXX XXX XXX XXX XXX XXX XXX
			XXX XXX XXX XXX XXX XXX XXX XXX XXX
		</div>
		<div class="pickup-text">ピックアップ記事</div>
		<div class="pickup-posts" v-for="post in pickupPosts">
			<PostCard v-bind:path="post._path" v-bind:title="post.title" v-bind:date="post.date" v-bind:tags="post.tags"
				v-bind:image="post.image" class="post-card" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variable';

.photo-slider {
	position: relative;
	width: 100%;
	aspect-ratio: $golden-ratio;
	margin: 0 auto;

	.slider-image {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.fadeout {
		visibility: hidden;
		opacity: 0;
		transition: 2s ease-in-out;
	}

	.fadein {
		visibility: visible;
		opacity: 1;
		transition: 2s ease-in-out;
	}
}

.icon {
	position: relative;
	width: 96px;
	height: 96px;
	margin: -48px auto 0 auto;

	.icon-image {
		@extend .my-box-shadow;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		background-color: $color-background;
	}
}

.site-name {
	@extend .font-title-large;
	display: flex;
	margin: 4px auto 0 auto;
	padding: 0 16px;
	justify-content: center;
}

.site-description {
	@extend .font-body;
	display: flex;
	margin: 4px auto 0 auto;
	padding: 0 16px;
	justify-content: center;
}

.pickup-text {
	@extend .font-label-large;
	margin: 24px 16px 8px 16px;
}

.pickup-posts {
	margin: 0 16px;

	.post-card {
		margin-bottom: 16px;
	}
}
</style>

<script setup lang="ts">
const siteName = useRuntimeConfig().siteName

useHead({
	title: siteName
});

const posts = await queryContent('posts')
	.where({ '_draft': false })
	.sort({ 'date': -1 })
	.only(['_path', 'title', 'date', 'tags', 'image'])
	.find();

const images = posts.map(post => post.image)

const pickupPosts = posts.filter(post => {
	return useRuntimeConfig().pickupPosts.some(path => path === post._path);
});

const pageNum = ref(0);

const isFadein = (index) => {
	return index === pageNum.value;
}

let intervalId = null;

onMounted(() => {
	intervalId = setInterval(() => {
		pageNum.value = (pageNum.value + 1) % images.length;
	}, 10000);
});

onBeforeUnmount(() => {
	clearInterval(intervalId);
});
</script>
