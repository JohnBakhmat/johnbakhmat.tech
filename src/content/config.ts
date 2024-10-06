import { defineCollection } from "astro:content";
import { z } from "zod";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        readingTime: z.string(),
        draft: z.boolean().optional(),
    }),
});

export const collections = { blog };
