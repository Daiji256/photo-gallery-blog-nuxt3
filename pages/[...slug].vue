<template>
	<div class="post">
		<ContentDoc v-slot="{ doc }">
			<img class="top-image" v-bind:src="doc.image">
			<h1 class="top-title" v-bind:id="doc.title">{{ doc.title }}</h1>
			<div class="top-tags">
				<NuxtLink class="top-tag" v-for="tag in doc.tags" v-bind:to="`/posts?tag=${tag}`">
					{{ tag }}
				</NuxtLink>
			</div>
			<div class="top-date">{{ dateToStr(doc.date) }}</div>
			<ContentRenderer v-bind:value="doc" />
		</ContentDoc>
	</div>
</template>

<script setup lang="ts">
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateToStr = (dateStr: string) => {
	const date = new Date(dateStr);
	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
</script>
