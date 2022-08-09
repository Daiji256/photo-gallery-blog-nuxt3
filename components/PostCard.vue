<template>
	<div>
		<NuxtLink v-bind:to="path">
			<img class="post-image" v-bind:src="image">
			<div class="post-title">{{ title }}</div>
			<div class="post-tags-date">
				<NuxtLink class="post-tag" v-for="tag in tags" v-bind:to="`/posts?tag=${tag}`">
					{{ tag }}
				</NuxtLink>
				<span class="post-date">{{ dateToStr(date) }}</span>
			</div>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
type Props = { title: string, date: string, tags: string[], image: string, path: string }
const { title, date, tags, image, path } = defineProps<Props>();

// TODO: 共通化する
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateToStr = (dateStr: string) => {
	const date = new Date(dateStr);
	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
</script>
