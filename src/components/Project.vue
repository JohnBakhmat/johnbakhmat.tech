<script setup lang="ts">
import type { Repo } from "../repo";
const { repo } = defineProps<{ repo: Repo }>();
</script>

<template>
  <a
    :href="repo.url"
    target="_blank"
    rel="noreferrer"
    class="w-full hover:no-underline"
  >
    <div
      class="bg-themeBlack flex h-36 flex-col justify-between gap-y-2 rounded-xl border border-neutral-700 p-4 transition-transform ease-out hover:scale-105"
    >
      <div class="flex flex-col gap-y-2">
        <span class="text-themeAccent text-xl font-medium">{{
          repo.name
        }}</span>
        <p class="text-sm text-neutral-200">{{ repo.description }}</p>
      </div>

      <div class="text-(sm neutral-200) flex items-center gap-x-2">
        <div class="flex items-center gap-x-1">
          <span id="stars" title="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="h-5 w-5"
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
        <div class="text-sm">{{ repo.languages.join(", ") }}</div>
      </div>
    </div>
  </a>
</template>
