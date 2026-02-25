import { useParams, Link } from "react-router-dom";
import { useEffect, useState, type JSX } from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { LazyImage } from "@/components/ui/lazy-image"; // Adjust path if needed
import Footer from "./Footer";

// 1. Setup Image Builder
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return source ? builder.image(source).url() : "";
}

// 2. Updated Query for rich metadata (Image, Author, Time)
const POST_QUERY = `*[
  _type == "post" && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  "author": author->name,
  mainImage,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ) + " min read"
}`;

interface PostFull {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any;
  author?: string;
  mainImage?: any;
  estimatedReadingTime?: string;
}

export default function SinglePost(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostFull | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const data = await client.fetch<PostFull>(POST_QUERY, { slug });
        setPost(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground font-baskerville animate-pulse">
          Loading post...
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-baskerville font-semibold">Post not found.</p>
        <Link to="/blog" className="text-blue-600 font-baskerville hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="relative min-h-screen w-full overflow-hidden">
      {/* --- Shared Background (Matches BlogPage) --- */}
      <div
        aria-hidden
        className="absolute inset-0 isolate contain-strict -z-10 opacity-60 pointer-events-none"
      >
        <div className="-rotate-45 bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 rounded-full" />
        <div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] rounded-full" />
        <div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 rounded-full" />
      </div>

      <div className="container font-baskerville mx-auto max-w-3xl px-6 py-12">
        {/* Header Section */}
        <header className="my-10 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {post.title}
            </h1>

            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-medium tracking-wide">
              <span className="text-xl">{post.author || "Admin"}</span>
              <div className="bg-muted-foreground/30 size-1 rounded-full" />
              <time dateTime={post.publishedAt} className="text-xl">
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <div className="bg-muted-foreground/30 size-1 rounded-full" />
              <span className="text-xl">{post.estimatedReadingTime || "5 min read"}</span>
            </div>
          </div>

          {/* Hero Image */}
          {post.mainImage && (
            <div className="rounded-xl overflow-hidden border bg-muted/50 shadow-sm mt-8">
              <LazyImage
                src={urlFor(post.mainImage)}
                alt={post.title}
                ratio={16 / 9}
                inView={true}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          )}
        </header>

        {/* Content Section */}
        <div className="prose prose-lg text-xl prose-neutral dark:prose-invert max-w-none leading-relaxed text-foreground/90">
          <PortableText value={post.body} />
        </div>

        {/* Footer / Divider */}
        <div className="mt-16 pt-8 border-t border-dashed border-border/60">
          <p className="text-center text-muted-foreground text-sm italic">
            Thanks for reading!
          </p>
        </div>
      </div>

      <Footer />
    </article>
  );
}
