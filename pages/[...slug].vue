<template>
	<div class="post">
		<ContentDoc v-slot="{ doc }">
			<img v-bind:src="doc.image" class="top-image">
			<div class="post">
				<h1 class="top-title">{{ doc.title }}</h1>
				<NuxtLink class="top-tag" v-for="tag in doc.tags" v-bind:to="`/posts?tag=${tag}`">
					{{ tag }}
				</NuxtLink>
				<div class="top-date">{{ dateJa(doc.date) }}</div>

				<ContentRenderer v-bind:value="doc" />
			</div>
		</ContentDoc>
	</div>
</template>

<script setup lang="ts">
const dateJa = (date: string) => {
	return date
		.substring(0, date.indexOf('T'))
		.replaceAll('-0', '-')
		.replace('-', '年')
		.replace('-', '月')
		.concat('日');
}
</script>
