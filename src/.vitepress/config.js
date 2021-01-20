const footnote = require('markdown-it-footnote');
const attrs = require('markdown-it-attrs');

module.exports = {
  title: 'Chris Shank',
  description: "Chris Shank's personal website.",
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
