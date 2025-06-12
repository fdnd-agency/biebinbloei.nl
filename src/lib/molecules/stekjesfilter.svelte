<script>
	import { onMount, createEventDispatcher } from 'svelte';

	let { data, active } = $props();
	const dispatch = createEventDispatcher();

	const fullText = data.sectionInfos[0].description;
	const [mainText, afterDash] = fullText.split('-- ');

	let jsEnabled = $state(false);

	onMount(() => {
		jsEnabled = true;
	});

	function allStekjes() {
		dispatch('showAll');
	}

	function currentStekjes() {
		dispatch('showCurrent');
	}
</script>

<section>
	<h2>
		<span class="outline">{data.sectionInfos[0].title.split(' ')[0]}</span>
		<span class="block">{data.sectionInfos[0].title.split(' ')[1]}</span>
	</h2>

	<p>
		{mainText}
		<span class="block-bold">-- {afterDash}</span>
	</p>

	<button
		onclick={allStekjes}
		class:active={active === 'alle'}
		disabled={!jsEnabled ? true : undefined}>Alle stekjes</button
	>
	<button onclick={currentStekjes} class:active={active === 'actueel'}>Actuele stekjes</button>
</section>

<style>
	section {
		padding: 1.5rem;
	}

	h2 {
		font-size: 2rem;
		text-transform: uppercase;
		font-family: var(--header-font);
		color: var(--main-color-brown);

		@media (min-width: 74rem) {
			font-size: 2.25rem;
		}
	}

	p {
		font-size: 1rem;
		margin-top: 1rem;
		line-height: 1.6rem;
		color: var(--main-color-brown);
		font-family: var(--link-font);

		@media (min-width: 48rem) {
			max-width: 25em;
		}

		@media (min-width: 74rem) {
			max-width: 31rem;
		}
	}

	.outline {
		color: transparent;
		-webkit-text-stroke: 1.8px var(--main-color-brown);
	}

	.block-bold {
		font-family: var(--sub-header-font);
	}

	.block,
	.block-bold {
		display: block;
		line-height: 2.7rem;
	}

	/* -- Button styling -- */

	button {
		border: none;
		font-size: 1em;
		cursor: pointer;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		font-family: var(--paragraph-font);
		background: var(--main-color-beige);
		transition:
			transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.25s ease,
			box-shadow 0.3s ease;
	}

	@media (prefers-reduced-motion: reduce) {
		button {
			transition: none;
		}
	}

	button:hover {
		font-family: var(--sub-header-font);
		transform: scale(1.07) rotate(-0.5deg);
	}

	button.active {
		font-weight: bold;
		transform: scale(0.98);
	}

	button:hover,
	button.active {
		color: var(--main-color-beige);
		background: var(--main-color-brown);
	}

	button:focus-visible {
		outline-offset: 2px;
		outline: 3px solid var(--main-color-brown);
	}

	/* -- js-disabled styling --  */

	button[disabled] {
		color: #666;
		background: #ccc;
		cursor: not-allowed;
		font-weight: normal;
		pointer-events: none;
	}
</style>
