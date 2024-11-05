import { defineAction } from "astro:actions";
import { z } from "zod";

export const server = {
    getRepos: defineAction({
        handler: async () => {
            const repo = z.object({
                name: z.string(),
                description: z.string(),
                url: z.string().url(),
                stars: z.number(),
                forks: z.number(),
                languages: z.array(z.string()),
            });

            try {
                const url =
                    "https://pinned.johnbakhmat.dev/projects/johnbakhmat";
                const response = await fetch(url);
                const json = await response.json();
                const repos = await repo.array().parseAsync(json);
                return repos;
            } catch (error) {
                console.error("Failed to fetch pinned repos:", error);
                return [];
            }
        },
    }),
};
