<template>
  <div class="text-gray-600">
    <span v-if="stage">{{ stage }} | </span>
    <span
      >Last tended to on <span class="whitespace-nowrap italic">{{ lastUpdated }}</span></span
    >
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect, defineProps } from 'vue';
import { useRoute } from 'vitepress';

const props = defineProps({
  stage: { required: true, type: String },
});

const route = useRoute();

const stage = computed(() => {
  switch (props.stage) {
    case 'seedling':
      return '🌱 Seedling';
    case 'budding':
      return '🌿 Budding';
    case 'evergreen':
      return '🌳 Evergreen';
    default:
      return '';
  }
});

const lastUpdated = computed(() => {
  const date = route.data?.lastUpdated;
  return date === undefined
    ? ''
    : new Date(date).toLocaleDateString('default', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
});
</script>
