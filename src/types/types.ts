import type { PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: PortableTextBlock[];
}
