<template>
	<div class="photo-slider">
		<img src="/images/sample-01.jpg" id="slidePhoto1" class="fadein">
		<img src="/images/sample-02.jpg" id="slidePhoto2" class="fadeout">
		<div class="indicator">
			<div class="item" @click="setPage(0)">
				<div class="circle"></div>
			</div>
			<div class="item" @click="setPage(1)">
				<div class="circle"></div>
			</div>
			<div class="item" @click="setPage(2)">
				<div class="circle"></div>
			</div>
			<div class="item" @click="setPage(3)">
				<div class="circle"></div>
			</div>
			<div class="item" @click="setPage(4)">
				<div class="circle"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const imgSrc = [
	"/images/sample-01.jpg",
	"/images/sample-02.jpg",
	"/images/sample-03.jpg",
	"/images/sample-04.jpg",
	"/images/sample-05.jpg",
];
let intervalId = null;
let pageNum: number = 1;
let imgFlg: boolean = false;

const slider = () => {
	if (imgFlg) {
		document.getElementById("slidePhoto1").setAttribute('src', `${imgSrc[pageNum]}`);
		document.getElementById("slidePhoto1").className = "fadein";
		document.getElementById("slidePhoto2").className = "fadeout";
	} else {
		document.getElementById("slidePhoto2").setAttribute('src', `${imgSrc[pageNum]}`);
		document.getElementById("slidePhoto2").className = "fadein";
		document.getElementById("slidePhoto1").className = "fadeout";
	}
	imgFlg = !imgFlg;
	pageNum++;
	if (pageNum >= imgSrc.length) pageNum = 0;
}

const setSlideInterval = () => {
	intervalId = setInterval(slider, 10000);
}

const setPage = (setPageNum: number) => {
	pageNum = setPageNum;
	if (imgFlg) {
		document.getElementById("slidePhoto1").setAttribute('src', `${imgSrc[pageNum]}`);
		document.getElementById("slidePhoto1").className = "quick-in";
		document.getElementById("slidePhoto2").className = "quick-out";
	} else {
		document.getElementById("slidePhoto2").setAttribute('src', `${imgSrc[pageNum]}`);
		document.getElementById("slidePhoto2").className = "quick-in";
		document.getElementById("slidePhoto1").className = "quick-out";
	}
	imgFlg = !imgFlg;
	pageNum++;
	if (pageNum >= imgSrc.length) pageNum = 0;
	clearInterval(intervalId);
	setSlideInterval();
}

onMounted(() => {
	setSlideInterval();
});
onBeforeUnmount(() => {
	clearInterval(intervalId);
});

definePageMeta({
	layout: 'main-wrapper',
});
</script>
