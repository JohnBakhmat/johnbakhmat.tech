import { type CollectionEntry } from "astro:content";
type PostType = CollectionEntry<"blog">;

export const Post = ({
	data: post,
}: {
	data: PostType;
}) => {
	return (
		<a
			href={`/blog/${post.slug}`}
			rel="prefetch"
			className="flex flex-col gap-y-3 hover:(no-underline bg-neutral-800) p-4 mb-8 transition-colors rounded-xl"
		>
			<h3 className="text-(themeText xl) md:text-2xl font-extrabold">
				{post.data.title}
			</h3>

			<p className="text-sm md:text-base font-medium">
				{post.data.description}
			</p>

			<div className="flex items-center gap-x-2 text-(neutral-200 xs) md:text-sm font-medium">
				<time dateTime={post.data.pubDate}>
					{new Date(post.data.pubDate).toLocaleDateString("en-us", {
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</time>

				<span>•</span>

				<span>{post.data.readingTime}</span>
			</div>
		</a>
	);
};
