<template>
  <div class="min-h-full flex flex-col p-4">
    <header class="mb-4 lg:mb-8 lg:ml-6">
      <a href="/" class="text-5xl transform hover:scale-110 transition-transform">𝕮</a>
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
          <Content />
        </main>
      </transition>

      <footer class="mt-12 pt-1 border-t-2 border-gray-400 text-right">
        ©<span class="font-light">ChrisShank</span><span class="font-extrabold">2021</span>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';

const route = useRoute();
</script>
