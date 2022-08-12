<template>
	<div>
		<div class="photo-slider">
			<img v-bind:src="img1" v-bind:class='{ "fadein": isFadein, "fadeout": !isFadein, "quick": isQuick }'>
			<img v-bind:src="img2" v-bind:class='{ "fadein": !isFadein, "fadeout": isFadein, "quick": isQuick }'>
			<div class="indicator">
				<div class="item" v-for="(_, index) in pickupPosts" v-on:click="setPage(index)">
					<div class="circle" v-bind:class='{ "active": pageNum == index, "quick": isQuick }'></div>
				</div>
			</div>
		</div>
		<!-- TODO: -->
		ピックアップ
		<div class="pickup-posts" v-for="post in pickupPosts">
			<PostCard v-bind:path="post._path" v-bind:title="post.title" v-bind:date="post.date" v-bind:tags="post.tags"
				v-bind:image="post.image" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variable';

.photo-slider {
	position: relative;
	width: calc(100% - 32px);
	aspect-ratio: $golden-ratio;
	margin: 0 auto;

	img {
		position: absolute;
		width: 100%;
		aspect-ratio: $golden-ratio;
		border-radius: 12px;
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

	.quick {
		transition: 0.2s ease-in-out;
	}

	.indicator {
		position: absolute;
		width: 100%;
		bottom: 0;
		text-align: center;

		.item {
			display: inline-block;
			vertical-align: bottom;

			.circle {
				background-color: $color-primary-container;
				width: 8px;
				height: 8px;
				border-radius: 4px;
				margin: 6px;
				transition: 2s ease-in-out;
			}

			.quick {
				transition: 0.2s ease-in-out;
			}

			.active {
				background-color: $color-primary;
			}
		}
	}
}

.pickup-posts {
	margin: 0 16px;
}
</style>

<script setup lang="ts">
const posts = await queryContent('posts')
	.where({ '_draft': false })
	.sort({ 'date': -1 })
	.only(['_path', 'title', 'date', 'tags', 'image'])
	.find();
const pickupPosts = posts.filter(post => {
	return useRuntimeConfig().pickupPosts.some(path => path === post._path);
});

const pageNum = ref(0);
const img1 = ref(pickupPosts[0].image);
const img2 = ref(pickupPosts[1].image);
const isFadein = ref(true);
const isQuick = ref(false);
let intervalId = null;

const slider = () => {
	pageNum.value = (pageNum.value + 1) % pickupPosts.length;
	if (isFadein.value) {
		img2.value = pickupPosts[pageNum.value].image;
	} else {
		img1.value = pickupPosts[pageNum.value].image;
	}
	isQuick.value = false;
	isFadein.value = !isFadein.value;
}

const setSlideInterval = () => {
	intervalId = setInterval(slider, 10000);
}

const setPage = (setPageNum: number) => {
	pageNum.value = setPageNum;
	if (isFadein.value) {
		img2.value = pickupPosts[pageNum.value].image;
	} else {
		img1.value = pickupPosts[pageNum.value].image;
	}
	isQuick.value = true;
	isFadein.value = !isFadein.value;
	clearInterval(intervalId);
	setSlideInterval();
}

onMounted(() => {
	setSlideInterval();
});
onBeforeUnmount(() => {
	clearInterval(intervalId);
});
</script>
