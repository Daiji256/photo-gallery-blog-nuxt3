<template>
	<div>
		<div class="tags-filter">
			<div class="tags-filter-label" v-on:click="onClickFilter()">
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
		</div>
		<div class="posts" v-for="post in posts">
			<div v-if="containsTag(post.tags)">
				<PostCard v-bind:path="post._path" v-bind:title="post.title" v-bind:date="post.date" v-bind:tags="post.tags"
					v-bind:image="post.image" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variable';
</style>

<script setup lang="ts">
const posts = await queryContent('posts')
	.where({ '_draft': false })
	.sort({ 'date': -1 })
	.only(['_path', 'title', 'date', 'tags', 'image'])
	.find();

const tagsCount: number[] = [posts].flat().map(v => v.tags).flat().reduce(
	(prev, current) => {
		prev[current] = (prev[current] || 0) + 1;
		return prev;
	}, {}
);
const tags = Object.entries(tagsCount)
	.map(([name, count]) => ({ name, count }))
	.sort((a, b) => { return b.count - a.count });

const getQueryTags = () => {
	return [useRoute().query.tag].flat().filter(tag => tag != null);
}

const visibleTags = ref(false);
const onClickFilter = () => {
	visibleTags.value = !visibleTags.value;
}

const queryTags = ref(getQueryTags());

watch(() => useRoute().query, () => {
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
</script>
