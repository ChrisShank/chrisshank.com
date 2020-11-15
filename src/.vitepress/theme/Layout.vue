<template>
	<div class="min-h-screen flex flex-col p-4 bg-gray-200">
		<header class="mb-12 pt-4 md:pl-2">
			<h1 class="font-medium text-4xl">
				<span id="logo" class="relative px-1 py-1">
					<div
						class="logo-box absolute top-0 left-0 bottom-0 right-0 z-10 border-4 border-red-500 border-opacity-50 rounded-sm transform transition-transform duration-200 ease-out"
						style="--transform-translate-x: -0.15rem; --transform-translate-y: -0.5rem"
					></div>
					<div
						class="logo-box absolute top-0 left-0 bottom-0 right-0 z-10 border-4 border-indigo-400 border-opacity-50 rounded-sm transform transition-transform duration-200 ease-out"
						style="--transform-translate-x: 0.25rem; --transform-translate-y: 0.5rem"
					></div>
					<a class="relative z-20 hide-underline" href="/">Chris Shank</a>
				</span>
			</h1>
		</header>

		<div class="prose-sm md:prose 2xl:prose-xl flex-1 mx-auto flex flex-col">
			<main class="flex-1">
				<h1 style="margin-bottom: 0">{{ page.title }}</h1>
				<div v-if="page.stage">
					<span>{{ page.stage }}</span>
					<span> | </span>
					<span
						>Last tended to on
						<span class="whitespace-no-wrap" style="color: rgb(26, 32, 44)">{{
							page.lastUpdated
						}}</span></span
					>
				</div>
				<Content />
			</main>

			<footer class="mt-12 pt-1 border-t-2 border-gray-400 text-right">
				©<span class="font-light">ChrisShank</span><span class="font-extrabold">2020</span>
			</footer>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { usePageData, useRoute } from 'vitepress'

function getStageEmoji(stage: string = ''): string {
	switch (stage) {
		case 'seedling':
			return '🌱 Seedling'
		case 'budding':
			return '🌿 Budding'
		case 'evergreen':
			return '🌳 Evergreen'
		default:
			return ''
	}
}

function formatDate(date: number) {
	return new Date(date).toLocaleDateString('default', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	})
}

export default defineComponent({
	setup() {
		const route = useRoute()
		const page = computed(() => {
			const { frontmatter, lastUpdated } = route.data
			return {
				...frontmatter,
				stage: getStageEmoji(frontmatter.stage),
				lastUpdated: formatDate(lastUpdated),
			}
		})
		return { page }
	},
})
</script>
