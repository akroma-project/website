// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Akroma',
  url: 'https://akroma.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'akroma-project',
  projectName: 'website', 

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/akroma-project/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Akroma',
        logo: {
          alt: 'Akroma',
          src: 'img/akroma.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/akroma-project/akroma',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Wallet',
            items: [
              {
                label: 'wallet.akroma.org',
                href: 'https://wallet.akroma.org',
              }
            ],
          },
          {
            title: 'Explorer',
            items: [
              {
                label: 'explorer.akroma.org',
                href: 'https://explorer.akroma.org',
              }
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'github.com/akroma-project',
                href: 'https://github.com/akroma-project/',
              }
            ],
          },
          {
            title: 'Mining',
            items: [
              {
                label: 'akroma.wattpool.net',
                href: 'https://akroma.wattpool.net/',
              }
            ],
          },
          
        ],
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Akroma.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
