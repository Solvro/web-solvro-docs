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
  site: "https://docs.solvro.pl",
  integrations: [
    starlight({
      title: "Solvro",
      customCss: ["./src/tailwind.css"],
      tableOfContents: true,
      logo: {
        light: "./src/assets/logo_dark.png",
        dark: "./src/assets/logo_white.png",
        replacesTitle: true,
      },
      lastUpdated: true,
      social: {
        facebook: "https://www.facebook.com/knsolvro",
        github: "https://github.com/solvro/web-solvro-docs",
        linkedin: "https://www.linkedin.com/company/knsolvro",
      },
      editLink: {
        baseUrl: "https://github.com/Solvro/web-solvro-docs/edit/main/",
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
