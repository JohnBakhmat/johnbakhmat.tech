<script setup lang="ts">
import { ref, reactive } from "vue";
import type { CollectionEntry } from "astro:content";
import Post from "../components/Post.vue";
const { posts } = defineProps<{ posts: CollectionEntry<"blog">[] }>();
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

  <div
    v-if="posts.length === 0"
    class="text-3xl text-center text-gray-500 my-10"
  >
    Wow its so empty here &#x1F615;
  </div>
  {{ JSON.stringify(posts) }}
</template>
