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
		<div v-for="post in pickupPosts">
			<div class="post-card">
				<PostCard v-bind:path="post._path" v-bind:title="post.title" v-bind:date="post.date" v-bind:tags="post.tags"
					v-bind:image="post.image" />
			</div>
		</div>
	</div>
</template>

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
