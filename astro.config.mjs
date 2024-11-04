// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkHeadingId from "remark-heading-id";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  markdown: {
    // @ts-expect-error ??????
    remarkPlugins: [remarkHeadingId],
  },
  integrations: [
    starlight({
      title: "Solvro",
      customCss: ["./src/tailwind.css"],
      tableOfContents: true,
      social: {
        github: "https://github.com/solvro",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
