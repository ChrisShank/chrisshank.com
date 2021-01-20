<template>
  <div class="min-h-full flex flex-col p-4">
    <header class="mb-2 -ml-2 lg:mb-8 lg:ml-2">
      <a href="/">
        <img
          src="/logo.png"
          alt="chris shank logo"
          class="transform hover:scale-110 transition-transform h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
        />
      </a>
    </header>

    <div class="prose-sm md:prose 2xl:prose-xl flex-1 mx-auto flex flex-col">
      <main class="flex-1">
        <h1 style="margin-bottom: 0">{{ page.title }}</h1>
        <div v-if="page.stage">
          <span>{{ page.stage }}</span>
          <span> | </span>
          <span
            >Last tended to on
            <span class="whitespace-nowrap" style="color: rgb(26, 32, 44)">{{
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
import { defineComponent, computed } from 'vue';
import { usePageData, useRoute } from 'vitepress';

function getStageEmoji(stage: string = ''): string {
  switch (stage) {
    case 'seedling':
      return '🌱 Seedling';
    case 'budding':
      return '🌿 Budding';
    case 'evergreen':
      return '🌳 Evergreen';
    default:
      return '';
  }
}

function formatDate(date: number) {
  return new Date(date).toLocaleDateString('default', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

export default defineComponent({
  setup() {
    const route = useRoute();
    const page = computed(() => {
      const { frontmatter, lastUpdated } = route.data;
      return {
        ...frontmatter,
        stage: getStageEmoji(frontmatter.stage),
        lastUpdated: formatDate(lastUpdated),
      };
    });
    return { page };
  },
});
</script>
