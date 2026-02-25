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


  url: 'https://dingjifj.github.io',
  baseUrl: '/dc-style-guide/',

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: false,
        // --- 针对你的情况新增以下配置 ---
        docsRouteBasePath: "/", // 必须与你 docs 的 routeBasePath 一致
        indexPages: true,
      },
    ],
  ],

  organizationName: 'dingjifj',
  projectName: 'dc-style-guide',

  onBrokenLinks: 'warn',

  // --- 关键配置开始 ---
  markdown: {
    mermaid: true,
  },
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
    
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '首页',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          href: '/',
        
        },
        items: [
          {
            type: 'doc',
            
           docId: 'MainDocs/DetailTwo', // 👈 注意：这里必须是你 docs 文件夹下确实存在的一个文件名
            sidebarId: 'tutorialSidebar',
           position: 'left',
            label: '文档',
         },
          {
            type: 'doc',
            docId: 'map/Map', // 👈 注意：这里必须是你 docs 文件夹下确实存在的一个文件名
            position: 'left',
            sidebarId: 'mapSidebar',
            label: '文档地图',
          },
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
                to: 'MainDocs/DetailTwo',
              },
               {
                label: '文档地图',
                to: 'RoadMap',
              },
              {
                label: '贡献指南',
                
                to: 'Contribute',
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