import Home from './Home.svelte'
import About from './About.svelte'
import Projects from './Projects.svelte'

// Assume that tabs each have unique names
export default [
	{
		name: 'About',
		component: About
	},
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Projects',
		component: Projects
	}
]
