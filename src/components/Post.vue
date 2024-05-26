<script setup lang="ts">
import { defineProps } from "vue";
import type { CollectionEntry } from "astro:content";
const { post } = defineProps<{ post: CollectionEntry<"blog"> }>();

const dateString = new Date(post.data.pubDate).toLocaleDateString("en-us", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
</script>

<template>
  <a
    :href="`/blog/${post.slug}`"
    rel="prefetch"
    class="flex flex-col gap-y-3 hover:no-underline hover:bg-neutral-800 p-4 mb-8 transition-colors rounded-xl"
  >
    <h3 class="text-themeAccent text-xl md:text-2xl font-extrabold">
      {{ post.data.title }}
    </h3>
    <p class="text-sm md:text-base font-medium">{{ post.data.description }}</p>
    <div
      class="flex items-center gap-x-2 text-neutral-200 text-xs md:text-sm font-medium"
    >
      <time :datetime="post.data.pubDate"> {{ dateString }} </time>
      <span>•</span>
      <span>{{ post.data.readingTime }}</span>
    </div>
  </a>
</template>
