<script setup lang="ts">
import { defineProps } from "vue";
import type { CollectionEntry } from "astro:content";
const props = defineProps<{data:CollectionEntry<"blog">}>();
const dateString = new Date(props.pubDate).toLocaleDateString("en-uk", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
</script>

<template>
  <a
    :href="`/blog/${props.slug}`"
    rel="prefetch"
    class="
      flex flex-col
      gap-y-3
      hover:no-underline hover:bg-neutral-800
      p-4
      mb-8
      transition-colors
      rounded-xl
    "
  >
    <h3 class="text-themeAccent text-xl md:text-2xl font-extrabold">
      {{ props.title }}
    </h3>
    <p class="text-sm md:text-base font-medium">{{ props.description }}</p>
    <div
      class="
        flex
        items-center
        gap-x-2
        text-neutral-200 text-xs
        md:text-sm
        font-medium
      "
    >
      <time :datetime="props.pubDate"> {{ dateString }} </time>
      <span>•</span>
      <span>{{ props.readingTime }}</span>
    </div>
  </a>
</template>
