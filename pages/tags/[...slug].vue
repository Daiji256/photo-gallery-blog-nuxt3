<template>
	<div class="tags">
		<nuxt-link class="tag" v-for="tag in tags" v-bind:to="`/tags/${tag.name}/`">
			{{ tag.name }} ({{ tag.count }})
		</nuxt-link>
	</div>
</template>

<script setup lang="ts">
const postsTags = await queryContent('posts')
	.where({ '_draft': false })
	.only(['tags'])
	.find();

const tags = Object.entries(
	[postsTags].flat().map(v => v.tags).flat().reduce(
		(prev, current) => {
			prev[current] = (prev[current] || 0) + 1;
			return prev;
		}, {}
	)
)
	.map(([name, count]) => ({ name, count }))
	.sort((a, b) => { return b.count - a.count; });
</script>
