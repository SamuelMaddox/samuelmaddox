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
          editUrl: "https://github.com/samuelmaddox/samuelmaddox/",
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
          sidebarId: "projectsSidebar",
          position: "left",
          label: "Projects",
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
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Developer Notes",
          items: [
            {
              label: "Developer Notes",
              to: "/dev-notes/index",
            },
          ],
        },
        {
          title: "Portfolio",
          items: [
            // {
            //   label: "Health Plan Calculator",
            //   to: "https://github.com/samuelmaddox/",
            // },
            {
              label: "New Probe Request",
              to: "https://samuelmaddox.github.io/projects/new-probe-request",
            },
            {
              label: "Hackathon Judging",
              to: "https://samuelmaddox.github.io/projects/hackathon-judging",
            },
            {
              label: "Hackathon Registration",
              to: "https://samuelmaddox.github.io/projects/hackathon-registration",
            },
            {
              label: "Fancy URL Shortener",
              to: "https://samuelmaddox.github.io/projects/fancy-url-shortener",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/samuelrmaddox/",
            },
            {
              label: "GitHub",
              href: "https://github.com/SamuelMaddox",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Samuel Maddox. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
