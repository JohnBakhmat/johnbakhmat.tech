<script setup lang="ts">
import type { Repo } from "../repo";
import Project from "./Project.vue";
import { actions } from "astro:actions";
const mailto =
  "mailto:johnbakhmat@gmail.com/?subject=Yo, your site project api broke";

const repos = await actions.getRepos().then((x) => x.data);
</script>

<template>
  <section class="w-full grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3 place-items-center">
    <Project v-if="repos.length > 0" v-for="repo in repos" :repo="repo" />
    <div v-else class="col-span-full row-span-full flex flex-col place-content-center text-center">
      <p>
        OOps can't get project info! If you see this,
        <a :href="mailto"> contact me </a>
        ASAP!
      </p>
      <h1>&#x1F615;</h1>
    </div>
  </section>
</template>
