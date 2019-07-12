<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let tabs = []
	export let activeTab
	export let width
</script>

<style>
	.nav-tabs {
    display: flex;
    font-weight: bold;
    justify-content: space-around;
    list-style: none;
    padding: 0;
		margin: 0 0 1.618rem;
  }

	.nav-tab {
		cursor: pointer;
		padding: 0 0.618rem;
		position: relative;
		transition: transform 0.1s ease-out;
	}

	.nav-tab:hover {
		transform: scale(1.1);
	}

	.nav-tab:before {
		background: #fff;
		border-radius: 5px;
		bottom: 0;
		content: "";
		height: 0.382rem;
		left: 0;
		position: absolute;
		opacity: 0;
		transform: scaleX(0);
		width: 100%;
		z-index: -1;
	}

	.active-nav-tab:before {
		animation: .5s forwards hover-v linear;
		opacity: 1;
	}

	@keyframes hover-v {
		0% {
			transform: scaleX(0);
			height: 5px;
		}
		45% {   
			transform: scaleX(1);
			height: 5px;
		}
		55% {
			height: 5px;
		}
		100% {
			transform: scaleX(1);
			height: 100%;
		}
	}
</style>

<nav style="width: {width}rem;">
	<ul class="nav-tabs">
		{#each tabs as tab}
			<li 
				class="nav-tab" 
				class:active-nav-tab={tab.name === activeTab.name}
				on:click={() => { 
					if (tab.name !== activeTab.name) dispatch('tab-change', tab) 
				}}
			>
				{tab.name}
			</li>
		{/each}
	</ul>
</nav>