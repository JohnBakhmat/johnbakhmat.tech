import { type CollectionEntry } from "astro:content";
import Fuse from "fuse.js";
import { useState, useRef, useEffect } from "react";
import { Post } from "../components/Post";
type PostType = CollectionEntry<"blog">;

export function BlogView({ posts }: { posts: PostType[] }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState<
        Fuse.FuseResult<PostType>[] | null
    >(null);

    const fuse = new Fuse(posts, {
        keys: [
            {
                name: "title",
                getFn: (post) => post.data.title,
            },
            {
                name: "description",
                getFn: (post) => post.data.description,
            },
        ],
        threshold: 0.3,
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search).get(
            "q",
        );

        if (searchParams) setQuery(searchParams);

        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.selectionStart =
                    inputRef.current.selectionEnd = searchParams?.length || 0;
            }
        }, 50);
    }, []);

    useEffect(() => {
        setSearchResults(query.length > 0 ? fuse.search(query) : null);

        if (query.length > 0) {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("q", query);

            const newUrl = `${
                window.location.pathname
            }?${searchParams.toString()}`;
            history.pushState(null, "", newUrl);
        } else {
            history.pushState(null, "", window.location.pathname);
        }
    }, [query]);

    return (
        <>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search posts"
                value={query}
                autoComplete="off"
                ref={inputRef}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full px-4 py-2 text-(neutral-200 lg) placeholder:text-neutral-400  bg-neutral-800 rounded-xl focus:(outline-none ring-2 ring-themeAccent) mb-6"
            />

            {posts.length === 0 && (
                <div className="text-3xl text-center text-gray-500 my-10">
                    Wow its so empty here &#x1F615;
                </div>
            )}

            {searchResults ? (
                searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <Post
                            key={`${result.refIndex}-${result.item.slug}`}
                            data={result.item}
                        />
                    ))
                ) : (
                    <>
                        <span className="text-(xl neutral-300) p-4">
                            No posts found. Maybe try one of these instead?
                        </span>

                        <div className="pb-6" />
                        {posts.slice(0, 3).map((post) => (
                            <Post key={post.slug} data={post} />
                        ))}
                    </>
                )
            ) : (
                posts.map((post) => <Post key={post.slug} data={post} />)
            )}
        </>
    );
}
