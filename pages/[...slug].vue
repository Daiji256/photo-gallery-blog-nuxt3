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
