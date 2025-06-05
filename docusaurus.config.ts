import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Samuel Maddox",
  tagline: "Lead Software Engineer",
  favicon: "img/favicon.ico",
  url: "https://samuelmaddox.github.io",
  baseUrl: "/",

  organizationName: "SamuelMaddox",
  projectName: "samuelmaddox.github.io",
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          editUrl: "https://github.com/samuelmaddox/samuelmaddox/blob/main/",
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Samuel Maddox",
      logo: {
        alt: "Samuel Maddox Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "devNotesSidebar",
          position: "left",
          label: "Developer Notes",
        },
        {
          type: "docSidebar",
          sidebarId: "articlesSidebar",
          position: "left",
          label: "Articles",
        },
        {
          href: "https://github.com/samuelmaddox/samuelmaddox",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/samuelrmaddox/",
          label: "LinkedIn",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      copyright: `Copyright © ${new Date().getFullYear()} Samuel Maddox. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
