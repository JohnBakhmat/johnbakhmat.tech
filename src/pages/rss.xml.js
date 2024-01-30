import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");

  const items = posts.map((post) => ({
    ...post.data,
    draft: undefined,
    link: `/blog/${post.slug}/`,
  }));

  console.dir(items);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: items,
  });
}
