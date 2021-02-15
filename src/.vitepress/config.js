// const footnote = require('markdown-it-footnote');
const wikilinks = require('markdown-it-wikilinks');
const attrs = require('markdown-it-attrs');

const hyphenateRE = /\s/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-').toLowerCase();
}
/** @type {import('vitepress').UserConfig} */
module.exports = {
  title: 'Chris Shank',
  description: "Chris Shank's notes.",
  lang: 'en-US',
  head: [
    [
      'link',
      {
        rel: 'preload',
        href: '/fonts/Crimson-Pro-vf.ttf',
        as: 'font',
        type: 'font/ttf',
        crossorigin: true,
      },
    ],
    ['meta', { name: 'author', content: 'Chris Shank' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href:
          'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>𝕮</text></svg>',
      },
    ],
    ['meta', { property: 'og:site_name', content: "Chris Shank's Notes" }],
    ['meta', { property: 'orbit:color', content: 'green' }],
    ['link', { rel: 'canonical', href: 'https://chrisshank.com' }],
    [
      'script',
      { type: 'module', src: 'https://js.withorbit.com/orbit-web-component.js', async: true },
    ],
  ],
  markdown: {
    config(app) {
      //app.use(footnote);
      app.use(attrs);
      app.use(
        wikilinks({
          baseURL: '/notes/',
          generatePageNameFromLabel: hyphenate,
        })
      );
    },
    anchor: {
      permalink: false,
    },
  },
  vueOptions: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('orbit-'),
      },
    },
  },
};
