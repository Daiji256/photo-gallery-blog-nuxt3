<template>
	<div>
		<div class="tags">
			<div class="tag" v-for="tag in tags" v-on:click="onClickTag(tag.name)">
				{{ tag.name }} ({{ tag.count }})
			</div>
		</div>
		<div class="post-cards">
			<div v-for="post in posts">
				<div class="post-card" v-if="containsTag(post.tags)">
					<NuxtLink v-bind:to="post._path">
						<img v-bind:src="`${post.image}`">
						<div class="title">{{ post.title }}</div>
					</NuxtLink>
					<div class="tags">
						<NuxtLink class="tag" v-for="tag in post.tags" v-bind:to="`/posts?tag=${tag}`" v-on:click="onClickTag(tag)">
							{{ tag }}
						</NuxtLink>
					</div>
					<div class="date">{{ dateJa(post.date) }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const posts = await queryContent('posts')
	.where({ '_draft': false })
	.sort({ 'date': -1 })
	.only(['_path', 'title', 'date', 'tags', 'image'])
	.find();

const tags = Object.entries(
	[posts].flat().map(v => v.tags).flat().reduce(
		(prev, current) => {
			prev[current] = (prev[current] || 0) + 1;
			return prev;
		}, {}
	)
)
	.map(([name, count]) => ({ name, count }))
	.sort((a, b) => { return b.count - a.count; });

const queryTags = [useRoute().query.tag].flat().filter(tag => tag != null);

const onClickTag = (tagName) => {
	if (queryTags.includes(tagName)) {
		queryTags.splice(queryTags.indexOf(tagName), 1);
	} else {
		queryTags.push(tagName);
	}
	useRouter().push({ query: { tag: queryTags } });
}

const containsTag = (postTags) => {
	if (queryTags.length === 0) return true;
	return queryTags.some(tag => postTags.includes(tag));
}

const dateJa = (date: string) => {
	return date
		.substring(0, date.indexOf('T'))
		.replaceAll('-0', '-')
		.replace('-', '年')
		.replace('-', '月')
		.concat('日');
}
</script>
