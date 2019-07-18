<script>
	import Nav from '../components/Nav.svelte'
	import FlipCard from '../components/FlipCard.svelte'
	import tabs from '../tabs'
	
	let frontTab = tabs.find(tab => tab.name === 'Home')
	let backTab = { name: '', component: null }
	$: activeTab = cardIsFlippedBack ? backTab : frontTab
	let cardIsFlippedBack = false
	// TODO: let cardFlippedClockwise = true
	const card = { height: 11.089, width: 17.942 }

	function onTabChange(event) {
		const nextTab = event.detail
		if (cardIsFlippedBack) {
			frontTab = nextTab
		} else {
			backTab = nextTab
		}
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
			<svelte:component this={frontTab.component}/>
		</div>
		<div slot="back">
    	<svelte:component this={backTab.component}/>
		</div>
  </FlipCard>
</div>
