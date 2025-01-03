// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkHeadingId from "remark-heading-id";
import tailwind from "@astrojs/tailwind";
import liveCode from "astro-live-code";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // @ts-expect-error ??????
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [
      [
        rehypeAstroRelativeMarkdownLinks,
        {
          contentPath: "src/content/docs",
        },
      ],
    ],
  },
  site: "https://docs.solvro.pl",
  integrations: [
    liveCode({
      defaultProps: {
        "client:load": true,
      },
    }),
    starlight({
      defaultLocale: "pl",
      locales: {
        root: {
          label: "Polski",
          lang: "pl",
        },
      },
      favicon: "favicon.ico",
      title: "Solvro",
      customCss: ["./src/tailwind.css"],
      tableOfContents: true,
      logo: {
        light: "./src/assets/logo_dark.png",
        dark: "./src/assets/logo_white.png",
        replacesTitle: true,
      },
      lastUpdated: true,
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://analytics.solvro.pl/script.js",
            "data-website-id": "8d083e9b-5ad6-4abb-b9b2-4c855adb18b0",
            defer: true,
            "data-domains": "docs.solvro.pl",
          },
        },
      ],
      components: {
        Head: "./src/overrides/Head.astro",
      },
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
          label: "Start here",
          items: [
            {
              label: "Gdzie zacząć?",
              link: "/hello-there",
            },
            {
              label: "Jak pisać dokumentacje?",
              link: "/how-to-write-docs",
            },
          ],
        },
        {
          label: "Handbooki",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Projekty",
          autogenerate: { directory: "projects" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
