<template>
	<div>
		<div class="tags-filter" v-on:click="onClickFilter()">
			<div class="text">絞り込み</div>
			<div class="logo">
				<svg height="20" width="20" v-bind:class='{ "rotate-180": visibleTags }'>
					<path fill="currentColor" d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" />
				</svg>
			</div>
		</div>
		<div class="tags" v-bind:class='{ "hidden": !visibleTags }'>
			<div class="tag" v-for="tag in tags" v-on:click="onClickTag(tag.name)"
				v-bind:class='{ "unselected": !isSelected(tag.name), "selected": isSelected(tag.name) }'>
				{{ tag.name }}
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

const getQueryTags = () => {
	return [useRoute().query.tag].flat().filter(tag => tag != null);
}

const visibleTags = ref(false);

const onClickFilter = () => {
	visibleTags.value = !visibleTags.value;
}

const queryTags = ref(getQueryTags());

watch(() => useRoute().query, (query) => {
	queryTags.value = getQueryTags();
});

const isSelected = (tagName) => {
	return queryTags.value.includes(tagName);
}

const onClickTag = (tagName) => {
	const newQueryTags = queryTags.value;
	if (isSelected(tagName)) {
		newQueryTags.splice(newQueryTags.indexOf(tagName), 1);
	} else {
		newQueryTags.push(tagName);
	}
	useRouter().push({ query: { tag: newQueryTags } });
}

const containsTag = (postTags) => {
	return queryTags.value.length === 0 || queryTags.value.some(tag => postTags.includes(tag));
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
