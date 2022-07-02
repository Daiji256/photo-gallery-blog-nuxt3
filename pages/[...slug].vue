<template>
	<div>
		<div>{{ content.title }}</div>
		<div>{{ content.date }}</div>
		<div>{{ content.tags }}</div>
		<img v-bind:src="content.image" width="250px">
		<!-- TODO: ContentRendererMarkdown で警告 -->
		<ContentRenderer v-bind:value="content">
			<ContentRendererMarkdown v-bind:value="content" />
		</ContentRenderer>
	</div>
</template>

<script setup lang="ts">
// TODO: queryContent の引数で警告
const content = await queryContent(useRoute().path).findOne();
// TODO: content 内の value でアキの処理をする
</script>
