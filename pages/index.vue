<template>
	<div class="photo-slider">
		<img id="slidePhoto" src="/images/sample-01.jpg">
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

const slideTime = () => {
	document.getElementById("slidePhoto").setAttribute('src', `${imgSrc[count]}`);
	count++;
	if (count >= imgSrc.length) count = 0;
}

onMounted(() => {
	setInterval(slideTime, 500);
});

definePageMeta({
	layout: 'main-wrapper',
});
</script>
