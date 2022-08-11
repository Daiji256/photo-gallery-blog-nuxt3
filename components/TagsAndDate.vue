<template>
	<div class="post-tags-date">
		<NuxtLink class="post-tag" v-for="tag in tags" v-bind:to="`/posts?tag=${tag}`">
			{{ tag }}
		</NuxtLink>
		<span class="post-date">{{ dateToStr(date) }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variable';

.post-tags-date {
	@extend .font-label-medium;
	display: flex;

	.post-tag {
		color: $color-link;
		margin-right: 8px;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;

		&:before {
			content: "#";
		}

		@media (hover: hover) {
			&:hover {
				text-decoration: underline 2px;
			}
		}
	}

	.post-date {
		color: $color-on-surface-variant;
		margin-left: auto;
	}
}
</style>

<script setup lang="ts">
type Props = { date: string, tags: string[] };
const { date, tags } = defineProps<Props>();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateToStr = (dateStr: string) => {
	const date = new Date(dateStr);
	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
</script>
