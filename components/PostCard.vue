<template>
	<div>
		<NuxtLink v-bind:to="path">
			<img class="post-image" v-bind:src="image">
			<div class="post-title">{{ title }}</div>
			<div class="post-tags">
				<NuxtLink class="post-tag" v-for="tag in tags" v-bind:to="`/posts?tag=${tag}`">
					{{ tag }}
				</NuxtLink>
			</div>
			<div class="post-date">{{ dateJa(date) }}</div>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
type Props = { title: string, date: string, tags: string[], image: string, path: string }
const { title, date, tags, image, path } = defineProps<Props>();

const dateJa = (date: string) => {
	return date
		.substring(0, date.indexOf('T'))
		.replaceAll('-0', '-')
		.replace('-', '年')
		.replace('-', '月')
		.concat('日');
}
</script>
