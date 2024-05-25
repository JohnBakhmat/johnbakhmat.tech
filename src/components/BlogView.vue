<script setup lang="ts">
import { ref } from "vue";
import Post from "@components/Post.vue";
import type { CollectionEntry } from "astro:content";
const props = defineProps<{ posts: CollectionEntry<"blog">[] }>();
const query = ref("");
const searchResult = reactive<Fuse.FuseResult<PostType>[] | null>();
</script>

<template>
  <input
    type="text"
    name="search"
    id="search"
    placeholder="Search posts"
    autoComplete="off"
    class="
      w-full
      px-4
      py-2
      text-neutral-200 text-lg
      placeholder:text-neutral-400
      bg-neutral-800
      rounded-xl
      focus:outline-none focus:ring-2 focus:ring-themeAccent
      mb-6
    "
  />
</template>
