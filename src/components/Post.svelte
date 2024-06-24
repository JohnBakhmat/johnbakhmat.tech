<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  export let post: CollectionEntry<"blog">;

  const dateString = new Date(post.data.pubDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
</script>

<a
  href={`/blog/${post.slug}`}
  rel="prefetch"
  class="flex flex-col gap-y-3 rounded-xl p-4 transition-colors hover:bg-neutral-800 hover:no-underline"
>
  <h3 class="text-themeAccent text-xl font-extrabold md:text-2xl">
    {post.data.title}
  </h3>
  <p class="text-sm font-medium md:text-base">{post.data.description}</p>
  <div
    class="flex items-center gap-x-2 text-xs font-medium text-neutral-200 md:text-sm"
  >
    <time datetime={post.data.pubDate}> {dateString} </time>
    <span>•</span>
    <span>{post.data.readingTime}</span>
  </div>
</a>
