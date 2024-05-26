<script setup lang="ts">
import type { Repo } from "../repo";
import Project from "./Project.vue";
type Response = Array<{
  Name: string;
  Description: string;
  Url: string;
  Stars: number;
  Forks: number;
  Languages: string[];
}>;
const mailto =
  "mailto:johnbakhmat@gmail.com/?subject=Yo, your site project api broke";
const repos = await fetch(
  "https://pinned.johnbakhmat.tech/projects/johnbakhmat",
)
  .then((res) => res.json())
  .then((json) => json as Response)
  .then((repos) =>
    repos.map(
      (repo) =>
        ({
          name: repo.Name,
          description: repo.Description,
          url: repo.Url,
          stars: repo.Stars,
          forks: repo.Forks,
          languages: repo.Languages,
        }) satisfies Repo,
    ),
  )
  .catch((error) => {
    console.error("Failed to fetch pinned repos: ", error);
    return [];
  });
</script>

<template>
  <section
    class="flex-grow w-full grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3 place-items-center"
  >
    <Project v-if="repos.length > 0" v-for="repo in repos" :repo="repo" />
    <div
      v-else
      class="col-span-full row-span-full flex flex-col place-content-center text-center"
    >
      <p>
        OOps can't get project info! If you see this,
        <a :href="mailto"> contact me </a>
        ASAP!
      </p>
      <h1>&#x1F615;</h1>
    </div>
  </section>
</template>
