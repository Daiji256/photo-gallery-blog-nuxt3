<template>
	<div class="post">
		<ContentDoc v-slot="{ doc }">
			<img class="top-image" v-bind:src="doc.image">
			<h1 class="top-title" v-bind:id="doc.title">{{ doc.title }}</h1>
			<TagsAndDate v-bind:date="doc.date" v-bind:tags="doc.tags" />
			<div class="doc-body">
				<ContentRenderer v-bind:value="doc" />
			</div>
		</ContentDoc>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variable';

.post {
	@extend .font-body;
	padding: 0 16px;

	.top-image {
		width: 100%;
		height: 160px;
		border-radius: 12px;
		object-fit: cover;
	}

	.top-title {
		margin-top: -56px;
	}

	.doc-body {
		margin-top: 16px;
	}
}
</style>

<style lang="scss">
@import '../assets/scss/variable';

h1 {
	@extend .font-title-large;
}

h2 {
	@extend .font-title-medium;
}

h3,
h4,
h5,
h6 {
	@extend .font-title-small;
}

h2,
h3,
h4 {
	// TODO: cursor の対応
	//cursor: text;

	a {
		color: inherit;
		text-decoration: none;
		pointer-events: none;
	}
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: -64px 0 0 0;
	padding: 64px 0 0 0;
}
</style>
