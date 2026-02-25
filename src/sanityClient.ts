import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "4fq6t7r8",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});