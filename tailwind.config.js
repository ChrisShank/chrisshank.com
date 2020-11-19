const plugin = require('tailwindcss/plugin')

const variableFontWeightPlugin = plugin(({ addUtilities }) => {
	const fontWeights = [
		'.font-hairline',
		'.font-thin',
		'.font-light',
		'.font-normal',
		'.font-medium',
		'.font-semibold',
		'.font-bold',
		'.font-extrabold',
		'.font-black',
	].reduce((acc, className, i) => {
		acc[className] = { 'font-variation-settings': `'wght' ${(i + 1) * 100}` }
		return acc
	}, {})

	addUtilities(fontWeights)
})

module.exports = {
	purge: [
    './src/**/*.{md,vue}',
  ],
	corePlugins: {
		fontWeight: false,
	},
	plugins: [
		variableFontWeightPlugin,
		require('@tailwindcss/typography'),
	],
}