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
	<button onclick={allStekjes} class:active={active === 'alle'}>Alle stekjes</button>
	<button onclick={currentStekjes} class:active={active === 'actueel'}>Actuele stekjes</button>
</section>

<style>
	section {
		padding: 1rem;
		margin-top: 2rem;
		margin: 1.25rem 0;
	}

	button {
		background: var(--main-color-beige);
		color: var(--main-color-brown);
		font-family: var(--paragraph-font);
		font-size: 1em;
		border: none;
		margin-top: 1rem;
		padding: 0.5em 1em;
		border-radius: 0.5em;
		cursor: pointer;
	}

	button:hover {
		color: var(--main-color-beige);
		background: var(--main-color-brown);
		font-family: var(--sub-header-font);
	}

	button.active {
		background: var(--main-color-brown);
		color: var(--main-color-beige);
		font-weight: bold;
	}
</style>