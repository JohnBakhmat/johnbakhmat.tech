import getReadingtime from "reading-time";
import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">;
export const addReadTimes = (p: Post): Post => ({
	...p,
	data: {
		...p.data,
		readingTime: getReadingtime(p.body).text,
	},
});
