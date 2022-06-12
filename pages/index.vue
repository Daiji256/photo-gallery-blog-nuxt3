<template>
	<div class="photo-slider">
		<img src="/images/sample-01.jpg" id="slidePhoto1" class="fadein">
		<img src="/images/sample-02.jpg" id="slidePhoto2" class="fadeout">
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
let count: number = 1;
let imgFlg: boolean = false;

const slideTime = () => {
	if (imgFlg) {
		document.getElementById("slidePhoto1").setAttribute('src', `${imgSrc[count]}`);
		document.getElementById("slidePhoto1").className = "fadein";
		document.getElementById("slidePhoto2").className = "fadeout";
	} else {
		document.getElementById("slidePhoto2").setAttribute('src', `${imgSrc[count]}`);
		document.getElementById("slidePhoto2").className = "fadein";
		document.getElementById("slidePhoto1").className = "fadeout";
	}
	imgFlg = !imgFlg;
	count++;
	if (count >= imgSrc.length) count = 0;
}

onMounted(() => {
	setInterval(slideTime, 10000);
});

definePageMeta({
	layout: 'main-wrapper',
});
</script>
