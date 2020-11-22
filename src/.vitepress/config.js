const markdownFootnotes = require('markdown-it-footnote')
const markdownAttrs = require('markdown-it-attrs')
const markdownItAttrs = require('markdown-it-attrs')

module.exports = {
	title: 'Chris Shank',
	description: 'Chris Shank\'s personal website.',
	lang: 'en-US',
	head: [
		['link', { rel: 'preload', href: '/fonts/Crimson-Pro-vf.ttf', as: 'font', type: 'font/ttf', crossorigin: true }],
		['meta', { name: 'author', content: 'Chris Shank' }],
		['link', { rel: 'icon', href: 'favicon.png' }],
	],
	markdown: {
		config(app) {
			app.use(markdownFootnotes)
			app.use(markdownItAttrs)
		},
		anchor: {
			permalink: false,
		},
	}
}