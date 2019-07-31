<script>
	import Nav from '../components/Nav.svelte'
	import FlipCard from '../components/FlipCard.svelte'
	import tabs from '../tabs'
	
	const card = { height: 11.089, width: 17.942 }

	// Set the front tab initially to the home tab
	let frontTab = tabs.find(tab => tab.name === 'Home')

	// Set the back tab to (essentially) 'null'
	let backTab = { name: '', component: null }

	// Compute the active tab based on how the card is flipped
	$: activeTab = cardIsFlippedBack ? backTab : frontTab
	
	let cardIsFlippedBack = false
	let rotateDegrees = 0

	// Check if tab1 comes before tab2 (same output as compare function in Array.sort())
	function compareTabs(tab1, tab2) {
		// tabs are the same
		if (tab1.name === tab2.name) return 0

		for (let i in tabs) {
			const tab = tabs[i]
			if (tab.name === tab1.name) return -1 // tab1 comes first
			else if (tab.name === tab2.name) return 1 // tab2 comes first 
		}

		throw Error('Neither tab is in tabs array')
	}

	function onTabChange({ detail: nextTab }) {
		// Determine the degrees that the card should be rotated
		if (compareTabs(activeTab, nextTab) > 0) rotateDegrees -= 180
		else rotateDegrees += 180

		// Set the next tab to the side of the card that is facing backwards.
		if (cardIsFlippedBack) frontTab = nextTab
		else backTab = nextTab
		
		// Flip the card
		cardIsFlippedBack = !cardIsFlippedBack
	}
</script>

<style>
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    min-width: 320px;
	}

	.card-front, .card-back {
		height: 100%;
	}
</style>

<div class="container">
  <Nav 
		on:tab-change={onTabChange}
		activeTab={activeTab} 
		tabs={tabs} 
		width={card.width} 
	/>

  <FlipCard 
		rotateDegrees={rotateDegrees} 
		{...card}
	>
		<div class="card-front" slot="front">
			<svelte:component this={frontTab.component}/>
		</div>
		<div class="card-back" slot="back">
    	<svelte:component this={backTab.component}/>
		</div>
  </FlipCard>
</div>
