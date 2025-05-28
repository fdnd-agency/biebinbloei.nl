<script>
	import { createEventDispatcher } from 'svelte';
	let { data, active } = $props();

	const dispatch = createEventDispatcher();

	function allStekjes() {
		dispatch('showAll');
	}

	function currentStekjes() {
		dispatch('showCurrent');
	}
</script>

<section>
	<button onclick={allStekjes} class="no-js-disabled" class:active={active === 'alle'}
		>Alle stekjes</button
	>
	<button onclick={currentStekjes} class:active={active === 'actueel'}>Actuele stekjes</button>
</section>

<!-- -- js-disabled styling -- -->
 
<noscript>
	<style>
		.no-js-disabled {
			color: #666 !important;
			background: #ccc !important;
			cursor: not-allowed !important;
			pointer-events: none !important;
			font-weight: normal !important;
		}
	</style>
</noscript>

<style>
	section {
		padding: 1rem;
		margin-top: 2rem;
		margin: 1.25rem 0;
	}

	/* -- Button styling -- */

	button {
		border: none;
		font-size: 1em;
		cursor: pointer;
		margin-top: 1rem;
		padding: 0.5em 1em;
		border-radius: 0.5em;
		color: var(--main-color-brown);
		font-family: var(--paragraph-font);
		background: var(--main-color-beige);
		transition:
			transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.25s ease,
			box-shadow 0.3s ease;
	}

	button:hover {
		color: var(--main-color-beige);
		background: var(--main-color-brown);
		font-family: var(--sub-header-font);
		transform: scale(1.07) rotate(-0.5deg);
	}

	button.active {
		font-weight: bold;
		transform: scale(0.98);
		color: var(--main-color-beige);
		background: var(--main-color-brown);
	}

	button:focus-visible {
		outline-offset: 2px;
		outline: 3px solid var(--main-color-brown);
	}
</style>
