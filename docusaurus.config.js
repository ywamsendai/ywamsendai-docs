// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YWAM UofN Sendai Handbook',
  tagline: 'Making God Known to the Japanese, Documented',
  url: 'https://docs.ywamsendai.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ywamsendai', // Usually your GitHub org/user name.
  projectName: 'ywamsendai-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ywamsendai/ywamsendai-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ywamsendai/ywamsendai-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Handbook',
        logo: {
          alt: 'YWAM Sendai Logo',
            src: 'img/ywamsendailogoblk.png',
            srcDark: 'img/ywamsendailogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about/ywam',
            position: 'left',
            label: 'What is YWAM Sendai?',
          },
          {
            type: 'doc',
            docId: 'community/communication',
            position: 'left',
            label: 'Community',
          },
          {
            type: 'doc',
            docId: 'staff/join',
            position: 'left',
            label: 'Staff',
          },
          {
            type: 'doc',
            docId: 'students/apply',
            position: 'left',
            label: 'Students',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        //  {to: '/blog', label: 'Blog', position: 'left'},
        //  {
        //    href: 'https://github.com/facebook/docusaurus',
        //    label: 'GitHub',
        //    position: 'right',
        //  },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'What is YWAM Sendai?',
                to: '/docs/about/ywam',
              },
              {
                label: 'Community',
                to: '/docs/community/communication',
              },
              {
                label: 'Staff',
                to: '/docs/staff/join',
              },
              {
                label: 'Students',
                to: '/docs/students/apply',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Chat',
                to: '/docs/community/communication',
              },
              {
                label: 'X',
                href: 'https://www.x.com/ywamsendai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Join',
                to: '/docs/staff/join',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ywamsendai/ywamsendai-docs',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} no rights reserved - made with ❤️ by YWAMSendai.org`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
