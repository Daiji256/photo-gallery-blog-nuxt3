<template>
	<div class="post-card">
		<NuxtLink v-bind:to="path">
			<div class="post-image-background">
				<img class="post-image" v-bind:src="image">
			</div>
			<div class="post-info">
				<div class="post-title">{{ title }}</div>
				<TagsAndDate v-bind:date="date" v-bind:tags="tags" />
			</div>
		</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variable';

.post-card {
	width: 100%;
	overflow: hidden;
	margin-bottom: 8px;
	border: 1px solid $color-outline;
	border-radius: 12px;
	background-color: $color-surface;

	@media (hover: hover) {
		&:hover {
			background-color: rgba($color-on-surface-variant, $state-hover);
		}

		.post-image-background {
			background-color: $color-on-surface-variant;

			.post-image:hover {
				opacity: calc(100% - $state-hover);
			}
		}
	}

	&:active {
		background-color: rgba($color-on-surface-variant, $state-pressed);

		.post-image-background {
			background-color: $color-on-surface-variant;

			.post-image:active {
				opacity: calc(100% - $state-pressed);
			}
		}
	}

	a {
		text-decoration: none;
		color: inherit;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.post-image-background {
		.post-image {
			width: 100%;
			aspect-ratio: $golden-ratio;
			object-fit: cover;
		}
	}

	.post-info {
		margin: 8px 16px 16px 16px;

		.post-title {
			@extend .font-title-medium;
			margin-bottom: 8px;
		}
	}
}
</style>

<script setup lang="ts">
type Props = { title: string, date: string, tags: string[], image: string, path: string }
const { title, date, tags, image, path } = defineProps<Props>();
</script>
