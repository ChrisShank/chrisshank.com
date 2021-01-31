const footnote = require('markdown-it-footnote');
const attrs = require('markdown-it-attrs');

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
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
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
      app.use(footnote);
      app.use(attrs);
    },
    anchor: {
      permalink: false,
    },
  },
};
