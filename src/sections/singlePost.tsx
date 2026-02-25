import { useParams, Link } from "react-router-dom";
import { useEffect, useState, type JSX } from "react";
import { PortableText } from "@portabletext/react";
import { client } from "../sanityClient";
import type { PostFull } from "@/types/types";

const POST_QUERY = `*[
  _type == "post" && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  body
}`;

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

  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;
  if (!post) return <div className="text-center py-20 text-lg">Post not found.</div>;

  return (
    <article className="container mx-auto max-w-3xl px-6 py-12 min-h-screen">
      <Link 
        to="/blog" 
        className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        &larr; Back to all posts
      </Link>

      <header className="mb-10 border-b pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          {post.title}
        </h1>
        <time className="text-gray-500 font-medium text-sm uppercase tracking-wide">
          {new Date(post.publishedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </header>

      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}