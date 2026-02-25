import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { LazyImage } from "@/components/ui/lazy-image";

// 1. Sanity Image Builder Setup
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return source ? builder.image(source).url() : "";
}

// 2. Updated Query to fetch image, author, and description
// Note: You may need to update your Sanity schema to include 'description' or 'author' if you haven't yet.
const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  description, 
  "author": author->name,
  mainImage,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ) + " min read"
}`;

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  description?: string;
  author?: string;
  mainImage?: any;
  estimatedReadingTime?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch<BlogPost[]>(POSTS_QUERY);
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground animate-pulse">
          Loading amazing content...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl grow min-h-screen">
      {/* Background Decor */}
      <div
        aria-hidden
        className="absolute inset-0 isolate contain-strict -z-10 opacity-60"
      >
        <div className="-rotate-45 bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 rounded-full" />
        <div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] rounded-full" />
        <div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 rounded-full" />
      </div>
      <div className="space-y-1 px-4 py-8">
        <h1 className="font-mono text-4xl font-bold tracking-wide">
          Blog Section
        </h1>
        <p className="text-muted-foreground text-base">
          Discover the latest trends and insights in the world of design and
          technology.
        </p>
      </div>
      <div className="absolute inset-x-0 h-px w-full border-b border-dashed" />

      <div className="grid p-4 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {posts.map((blog) => (
          <Link
            to={`/blog/${blog.slug.current}`}
            key={blog._id}
            className="group hover:bg-accent/60 active:bg-accent flex flex-col gap-2 rounded-lg p-2 duration-75"
          >
            <LazyImage
              src={blog.mainImage ? urlFor(blog.mainImage) : ""}
              fallback="https://placehold.co/640x360?text=No+Image"
              inView={true}
              alt={blog.title}
              ratio={16 / 9}
              className="transition-all duration-500 group-hover:scale-105"
            />

            <div className="space-y-2 px-2 pb-2">
              <div className="text-muted-foreground flex items-center gap-2 text-[11px] sm:text-xs">
                <p>by {blog.author || "Admin"}</p>
                <div className="bg-muted-foreground size-1 rounded-full" />
                <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                <div className="bg-muted-foreground size-1 rounded-full" />
                <p>{blog.estimatedReadingTime || "5 min read"}</p>
              </div>

              <h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight">
                {blog.title}
              </h2>

              <p className="text-muted-foreground line-clamp-3 text-sm">
                {blog.body || "Click to read more about this topic..."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
