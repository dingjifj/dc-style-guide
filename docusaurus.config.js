// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DC Style Guide',
  tagline: '构建专业、一致、国际化的技术内容方案',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://dingjifj.github.io',
  baseUrl: '/dc-style-guide/',

  organizationName: 'dingjifj',
  projectName: 'dc-style-guide',

  onBrokenLinks: 'warn',

  // --- 关键配置开始 ---
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // --- 关键配置结束 ---

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
    appId: 'CNVW5L5XT0',     // 等邮件
    apiKey: 'f7fad471f991913b7de124a7e3dc40c3',    // 等邮件
    indexName: 'dc-style-guide', // 等邮件
    contextualSearch: true,
  },

      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '文档写作指南',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          {
            href: 'https://github.com/dingjifj/dc-style-guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '开始阅读',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/dingjifj/dc-style-guide' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;