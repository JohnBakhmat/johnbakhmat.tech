<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import Fuse from "fuse.js";
import type { CollectionEntry } from "astro:content";
import Post from "../components/Post.vue";
const { posts } = defineProps<{ posts: CollectionEntry<"blog">[] }>();
const query = ref("");
const searchResult = ref<Fuse.FuseResult<PostType>[] | null>(null);
const inputRef = ref(null);
const fuse = new Fuse(posts, {
  keys: [
    {
      name: "title",
      getFn: (post) => post.data.title,
    },
    {
      name: "description",
      getFn: (post) => post.data.description,
    },
  ],
  threshold: 0.3,
});

onMounted(() => {
  const searchParams = new URLSearchParams(window.location.search).get("q");
  if (searchParams) query.value = searchParams;

  setTimeout(() => {
    if (inputRef.value) {
      inputRef.value.selectionStart = inputRef.value.selectionEnd =
        searchParams.length;
    }
  }, 50);
});

watch(query, async (newQuery, _) => {
  searchResult.value = newQuery.length > 0 ? fuse.search(newQuery) : null;
  if (newQuery && newQuery.length > 0) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("q", newQuery);

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    history.pushState(null, "", newUrl);
  } else {
    history.pushState(null, "", window.location.pathname);
  }
});
</script>

<template>
  <input
    type="text"
    name="search"
    id="search"
    placeholder="Search posts"
    autoComplete="off"
    :ref="inputRef"
    :value="query"
    @input="
      (event) => {
        query = event.target.value;
      }
    "
    class="focus:ring-themeAccent mb-6 w-full rounded-xl bg-neutral-800 px-4 py-2 text-lg text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2"
  />

  <div class="flex flex-col gap-3">
    <div
      v-if="posts.length === 0"
      class="my-10 text-center text-3xl text-gray-500"
    >
      Wow its so empty here &#x1F615;
    </div>

    <Post
      v-if="searchResult && searchResult.length > 0"
      v-for="post in searchResult"
      :key="`${post.refIndex}-${post.item.slug}`"
      :post="post.item"
    />
    <template v-else-if="searchResult && searchResult.length === 0">
      <span class="text-(xl neutral-300) p-4">
        No posts found. Maybe try one of these instead?
      </span>
      <Post v-for="post in posts.slice(0, 3)" :key="post.slug" :post="post" />
    </template>
    <Post v-else v-for="post in posts" :key="post.slug" :post="post" />
  </div>
</template>
