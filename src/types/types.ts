import type { PortableTextBlock } from "@portabletext/types";

export interface PostPreview {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

export interface PostFull extends PostPreview {
  body: PortableTextBlock[];
}