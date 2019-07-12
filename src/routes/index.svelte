<script>
	import Nav from '../components/Nav.svelte'
	import FlipCard from '../components/FlipCard.svelte'
	import tabs from '../tabs'
	
	let activeTab = { name: '', component: null }
	let cardIsFlippedBack = false
	let cardFlippedClockwise = true
	const card = { height: 11.089, width: 17.942 }

	function changeTab(nextTab) {
		activeTab = nextTab
		cardIsFlippedBack = true
	}

	function onTabChange(event) {
		if (cardIsFlippedBack) {
			cardIsFlippedBack = false
			setTimeout(() => {
				activeTab = event.detail
				cardIsFlippedBack = true
			}, 1000)
		} else {
			activeTab = event.detail
			cardIsFlippedBack = true
		}
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
	
	.logo {
		margin: 1.618rem auto 0;
		width: 80%;
	}
</style>

<div class="container">
  <Nav 
		on:tab-change={onTabChange}
		activeTab={activeTab} 
		tabs={tabs} 
		width={card.width} 
	/>

  <FlipCard flipBack={cardIsFlippedBack} {...card}>
		<div slot="front">
			<img class="logo" src="cs-logo.png" alt="logo" />
    	<h3>Chris Shank</h3>
		</div>
		<div slot="back">
    	<svelte:component this={activeTab.component}/>
		</div>
  </FlipCard>
</div>
