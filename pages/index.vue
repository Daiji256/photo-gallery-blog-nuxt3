<template>
	<div class="photo-slider">
		<img src="/images/sample-01.jpg" id="slidePhoto1" class="fadein">
		<img src="/images/sample-02.jpg" id="slidePhoto2" class="fadeout">
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
</template>

<script setup lang="ts">
const imgSrc = [
	"/images/sample-01.jpg",
	"/images/sample-02.jpg",
	"/images/sample-03.jpg",
	"/images/sample-04.jpg",
	"/images/sample-05.jpg",
];
const pageNum = ref(0);
const isQuick = ref(false);
let intervalId = null;
let imgFlg: boolean = false;

const slider = () => {
	pageNum.value = (pageNum.value + 1) % imgSrc.length;
	isQuick.value = false;
	if (imgFlg) {
		document.getElementById("slidePhoto1").setAttribute('src', `${imgSrc[pageNum.value]}`);
		document.getElementById("slidePhoto1").className = "fadein";
		document.getElementById("slidePhoto2").className = "fadeout";
	} else {
		document.getElementById("slidePhoto2").setAttribute('src', `${imgSrc[pageNum.value]}`);
		document.getElementById("slidePhoto2").className = "fadein";
		document.getElementById("slidePhoto1").className = "fadeout";
	}
	imgFlg = !imgFlg;
}

const setSlideInterval = () => {
	intervalId = setInterval(slider, 10000);
}

const setPage = (setPageNum: number) => {
	pageNum.value = setPageNum;
	isQuick.value = true;
	if (imgFlg) {
		document.getElementById("slidePhoto1").setAttribute('src', `${imgSrc[pageNum.value]}`);
		document.getElementById("slidePhoto1").className = "quick-in";
		document.getElementById("slidePhoto2").className = "quick-out";
	} else {
		document.getElementById("slidePhoto2").setAttribute('src', `${imgSrc[pageNum.value]}`);
		document.getElementById("slidePhoto2").className = "quick-in";
		document.getElementById("slidePhoto1").className = "quick-out";
	}
	imgFlg = !imgFlg;
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
