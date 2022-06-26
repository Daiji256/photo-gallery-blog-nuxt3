<template>
	<div>
		<div class="photo-slider">
			<img v-bind:src="`${img1}`" v-bind:class='{ "fadein": isFadein, "fadeout": !isFadein, "quick": isQuick }'>
			<img v-bind:src="`${img2}`" v-bind:class='{ "fadein": !isFadein, "fadeout": isFadein, "quick": isQuick }'>
			<div class="indicator">
				<div class="item" v-on:click="setPage(0)">
					<div class="circle" v-bind:class='{ "active": pageNum == 0, "quick": isQuick }'></div>
				</div>
				<div class="item" v-on:click="setPage(1)">
					<div class="circle" v-bind:class='{ "active": pageNum == 1, "quick": isQuick }'></div>
				</div>
				<div class="item" v-on:click="setPage(2)">
					<div class="circle" v-bind:class='{ "active": pageNum == 2, "quick": isQuick }'></div>
				</div>
				<div class="item" v-on:click="setPage(3)">
					<div class="circle" v-bind:class='{ "active": pageNum == 3, "quick": isQuick }'></div>
				</div>
				<div class="item" v-on:click="setPage(4)">
					<div class="circle" v-bind:class='{ "active": pageNum == 4, "quick": isQuick }'></div>
				</div>
			</div>
		</div>
		<!-- TODO: -->
		ピックアップ
		<div class="post-card" v-for="post in pickupPosts">
			<nuxt-link v-bind:to="post._path">
				<img v-bind:src="`${post.image} `">
				<div class="title">{{ post.title }}</div>
				<div class="tags">
					<nuxt-link class="tag" v-for="tag in post.tags" v-bind:to="`/ tags / ${tag} /`">
						{{ tag }}
					</nuxt-link>
				</div>
				<div class="date">{{ dateJa(post.date) }}</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
const posts = await queryContent('posts')
	.where({ '_draft': false })
	.only(['_path', 'title', 'date', 'tags', 'image'])
	.sort({ 'date': -1 })
	.find();
const pickupPosts = posts.filter(post => {
	return useRuntimeConfig().pickupPosts.some(path => path === post._path);
});

// TODO: 共通化する
const dateJa = (date: string) => {
	return date
		.substring(0, date.indexOf('T'))
		.replaceAll('-0', '-')
		.replace('-', '年')
		.replace('-', '月')
		.concat('日');
}

const imgSrc = [
	"/images/sample-01.jpg",
	"/images/sample-02.jpg",
	"/images/sample-03.jpg",
	"/images/sample-04.jpg",
	"/images/sample-05.jpg",
];
const pageNum = ref(0);
const img1 = ref(imgSrc[0]);
const img2 = ref(imgSrc[1]);
const isFadein = ref(true);
const isQuick = ref(false);
let intervalId = null;

const slider = () => {
	pageNum.value = (pageNum.value + 1) % imgSrc.length;
	if (isFadein.value) {
		img2.value = imgSrc[pageNum.value];
	} else {
		img1.value = imgSrc[pageNum.value];
	}
	isQuick.value = false;
	isFadein.value = !isFadein.value;
}

const setSlideInterval = () => {
	intervalId = setInterval(slider, 3000);
}

const setPage = (setPageNum: number) => {
	pageNum.value = setPageNum;
	if (isFadein.value) {
		img2.value = imgSrc[pageNum.value];
	} else {
		img1.value = imgSrc[pageNum.value];
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
