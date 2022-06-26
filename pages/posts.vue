<template>
	<div class="post-cards">
		<div class="post-card" v-for="post in posts">
			<nuxt-link v-bind:to="post._path">
				<img v-bind:src="`${post.image}`">
				<div class="title">{{ post.title }}</div>
				<div class="tags">
					<nuxt-link class="tag" v-for="tag in post.tags" v-bind:to="`/tags/${tag}/`">
						{{ tag }}
					</nuxt-link>
				</div>
				<div class="date">{{ dateJa(post.date) }}</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts">
const posts = await queryContent('posts')
	.where({ '_draft': false })
	.only(['_path', 'title', 'date', 'tags', 'image'])
	.sort({ 'date': -1 })
	.find();

const dateJa = (date: string) => {
	return date
		.substring(0, date.indexOf('T'))
		.replaceAll('-0', '-')
		.replace('-', '年')
		.replace('-', '月')
		.concat('日');
}
</script>
