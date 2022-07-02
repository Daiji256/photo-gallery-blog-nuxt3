<template>
	<div>
		<ContentDoc v-slot="{ doc }">
			<div>{{ doc.title }}</div>
			<div>{{ doc.date }}</div>
			<div>{{ doc.tags }}</div>
			<!-- TODO: リロードしないと画像が表示されない -->
			<img v-bind:src="doc.image" width="250px">
			<ContentRenderer v-bind:value="doc" />
		</ContentDoc>
	</div>
</template>

<script setup lang="ts">
</script>
