import { h, JSX } from '@stencil/core'

const tabs: Tab[] = [
  {
    name: 'About',
    component: () => <about-tab />
  },
  {
    name: 'Home',
    component: () => <home-tab />
  },
  {
    name: 'Projects',
    component: () => <projects-tab />
  }
]

export default tabs

// Check if tab1 comes before tab2 (same output as compare function in Array.sort())
export function compareTabs(tab1: Tab, tab2: Tab): -1 | 0 | 1 {
  // tabs are the same
  if (tab1.name === tab2.name) return 0

  for (let i in tabs) {
    const tab = tabs[i]
    if (tab.name === tab1.name) return -1
    // tab1 comes first
    else if (tab.name === tab2.name) return 1 // tab2 comes first
  }

  throw Error('Neither tab is in tabs array')
}

export interface Tab {
  name: string
  component: () => JSX.Element
}
