// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YWAM Japan Docs',
  tagline: 'Making God Known to the Japanese, Documented',
  url: 'https://docs.ywamjapan.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ywamjapan', // Usually your GitHub org/user name.
  projectName: 'ywamjapan-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ywamjapan/ywamjapan-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ywamjapan/ywamjapan-docs/',
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
        title: 'YWAM Japan Documentation',
        logo: {
          alt: 'YWAM Japan Logo',
          src: 'img/LogoywamRed.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about/ywam',
            position: 'left',
            label: 'What is YWAM Japan?',
          },
          {
            type: 'doc',
            docId: 'community/communication',
            position: 'left',
            label: 'Community',
          },
          {
            type: 'doc',
            docId: 'lifeinjapan/gettingsettled',
            position: 'left',
            label: 'Life in Japan',
          },
          {
            type: 'doc',
            docId: 'ministries/pioneering',
            position: 'left',
            label: 'Ministries/OpLocs',
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
                label: 'What is YWAM Japan?',
                to: '/docs/about/ywam',
              },
              {
                label: 'Community',
                to: '/docs/community/communication',
              },
              {
                label: 'Life in Japan',
                to: '/docs/lifeinjapan/gettingsettled',
              },
              {
                label: 'Ministries/OpLocs',
                to: '/docs/ministries/pioneering',
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
                label: 'Twitter',
                href: 'https://twitter.com/ywamjapan',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Join',
                to: '/docs/community/join',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ywamjapan/ywamjapan-docs',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} no rights reserved - made with ❤️ by YWAMJapan.org`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
