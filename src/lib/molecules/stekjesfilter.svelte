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

	const fullText = data.sectionInfos[0].description;
	const [mainText, afterDash] = fullText.split('-- ');
</script>

<section>
	<h2>
		<span class="outline">{data.sectionInfos[0].title.split(' ')[0]}</span>
		<span class="block">{data.sectionInfos[0].title.split(' ')[1]}</span>
	</h2>

	<p>
		{mainText}
		<span class="block bold">-- {afterDash}</span>
	</p>

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

	h2 {
		font-size: 2rem;
		text-transform: uppercase;
		font-family: var(--header-font);
		color: var(--main-color-brown);
	}

	.outline {
		color: transparent;
		-webkit-text-stroke: 1.8px var(--main-color-brown);
	}

	.block {
		display: block;
		line-height: 2rem;
	}

	p {
		font-size: 1rem;
		margin-top: 1rem;
		line-height: 1.6rem;
		color: var(--main-color-brown);
		font-family: var(--link-font);
	}

	.block {
		display: block;
		font-family: var(--sub-header-font);
	}

	/* -- Button styling -- */

	button {
		border: none;
		font-size: 1em;
		cursor: pointer;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		color: var(--main-color-brown);
		font-family: var(--paragraph-font);
		background: var(--main-color-beige);
		transition:
			transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.25s ease,
			box-shadow 0.3s ease;
	}

	button:first-child {
		margin-left: 1rem;
		margin-right: 0.4rem;
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

	/* -- Media query styling -- */

	/* -- Tablet styling -- */

	@media (min-width: 48rem) {
		section {
			margin: 5.25rem 0 3.25rem 0;
			padding: 1.25rem;
		}

		p {
			max-width: 25em;
		}
	}

	/* -- Desktop styling -- */

	@media (min-width: 74rem) {
		section {
			margin: 5.5rem 0 3.5rem 0;
			padding: 1.5rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		p {
			max-width: 31.25rem;
		}
	}
</style>
