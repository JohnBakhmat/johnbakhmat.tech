<script setup lang="ts">
import type { Repo } from "../repo";
const { repo } = defineProps<{ repo: Repo }>();
</script>

<template>
  <a
    :href="repo.url"
    target="_blank"
    rel="noreferrer"
    class="hover:no-underline w-full"
  >
    <div
      class="h-36 3xl:h-46 flex flex-col justify-between gap-y-2 border border-neutral-700 bg-themeBlack hover:scale-105 ease-out transition-transform p-4 rounded-xl"
    >
      <div class="flex flex-col gap-y-2">
        <span class="text-xl 3xl:text-4xl text-themeAccent font-medium">{{
          repo.name
        }}</span>
        <p class="text-sm 3xl:text-2xl text-neutral-200">{{ repo.description }}</p>
      </div>

      <div class="flex items-center gap-x-2 text-(sm neutral-200) 3xl:text-2xl">
        <div class="flex gap-x-1 items-center">
          <span id="stars" title="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-5 h-5"
              role="img"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>
          <span>{{ repo.stars }}</span>
        </div>

        <span>•</span>
        <div>{{ repo.languages.join(", ") }}</div>
      </div>
    </div>
  </a>
</template>
