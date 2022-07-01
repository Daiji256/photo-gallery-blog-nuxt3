<template>
	<div>
		<div class="tags">
			<nuxt-link class="tag" v-for="tag in tags" v-bind:to="`/tags/${tag.name}/`">
				{{ tag.name }} ({{ tag.count }})
			</nuxt-link>
		</div>
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

const slug = useRoute().params.slug || []
const posts = await queryContent('posts')
	.where({ '_draft': false })
	.where({ 'tags': { '$containsAny': slug } })
	.sort({ 'date': -1 })
	.only(['_path', 'title', 'date', 'tags', 'image'])
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
