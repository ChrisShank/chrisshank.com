<template>
  <div class="min-h-full flex flex-col p-4">
    <header class="mb-4 lg:mb-8 lg:ml-6">
      <a href="/">
        <img
          src="/logo.png"
          alt="chris shank logo"
          class="transform hover:scale-110 transition-transform h-12 w-12 md:h-16 md:w-16"
        />
      </a>
    </header>

    <div class="prose-sm md:prose 2xl:prose-xl flex-1 mx-auto flex flex-col">
      <transition
        mode="out-in"
        enter-from-class="opacity-0"
        enter-active-class="transition-opacity"
        leave-active-class="transition-opacity"
        leave-to-class="opacity-0"
      >
        <main :key="route.path" class="flex-1">
          <h1 style="margin-bottom: 0">{{ page.title }}</h1>

          <div v-if="page.stage" class="text-gray-600">
            <span>{{ page.stage }}</span>
            <span> | </span>
            <span
              >Last tended to on
              <span class="whitespace-nowrap italic">{{ page.lastUpdated }}</span></span
            >
          </div>

          <Content />
        </main>
      </transition>

      <footer class="mt-12 pt-1 border-t-2 border-gray-400 text-right">
        ©<span class="font-light">ChrisShank</span><span class="font-extrabold">2020</span>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vitepress';

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

const route = useRoute();

const page = computed(() => {
  const { frontmatter, lastUpdated } = route.data || {};
  return {
    ...frontmatter,
    stage: getStageEmoji(frontmatter.stage),
    lastUpdated: formatDate(lastUpdated),
  };
});

watchEffect(() => {
  const ogTitle = document.head.querySelector('[property="og:title"]');

  if (ogTitle) {
    ogTitle.setAttribute('content', route.data?.title);
  }
});
</script>
