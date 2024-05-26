<script setup lang="ts">
import type { Repo } from "../repo";
type Response = Array<{
  Name: string;
  Description: string;
  Url: string;
  Stars: number;
  Forks: number;
  Languages: string[];
}>;

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
  {{ repos }}
</template>
