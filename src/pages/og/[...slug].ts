import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

// Get all entries from the `docs` content collection.
const entries = await getCollection("docs");

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  // Pass down the documentation pages.
  pages,
  // Define the name of the parameter used in the endpoint path, here `slug`
  // as the file is named `[...slug].ts`.
  param: "slug",
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      // Use the page title and description as the image title and description.
      title: page.data.title,
      description: page.data.description,
      // Customize various colors and add a border.
      bgGradient: [[32, 53, 96]],
      border: { color: [195, 221, 255], width: 10 },
      font: {
        title: {
          color: [255, 255, 255],
          families: ["Space Grotesk"],
          weight: "Bold",
        },
        description: {
          color: [255, 255, 255],
          families: ["Space Grotesk"],
          lineHeight: 1.4,
        },
      },
      fonts: ["./src/assets/space_grotesk.ttf"],
      padding: 100,
      logo: {
        path: "./src/assets/docs_logo.png",
      },
    };
  },
});
