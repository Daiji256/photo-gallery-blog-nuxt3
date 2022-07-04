<template>
	<div class="post">
		<ContentDoc v-slot="{ doc }">
			<div>{{ doc.title }}</div>
			<div>{{ doc.date }}</div>
			<div>{{ doc.tags }}</div>
			<img v-bind:src="doc.image" width=250>
			<ContentRenderer v-bind:value="doc" />
		</ContentDoc>
	</div>
</template>

<script setup lang="ts">
</script>
