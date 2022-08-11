<template>
	<div>
		<NuxtLink v-bind:to="path">
			<img class="post-image" v-bind:src="image">
			<div class="post-info">
				<div class="post-title">{{ title }}</div>
				<TagsAndDate v-bind:date="date" v-bind:tags="tags" />
			</div>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
type Props = { title: string, date: string, tags: string[], image: string, path: string }
const { title, date, tags, image, path } = defineProps<Props>();
</script>
