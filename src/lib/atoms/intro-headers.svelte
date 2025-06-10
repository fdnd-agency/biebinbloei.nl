<script>
	let { heroInfo } = $props();

	const title = heroInfo.title ?? '';
	const words = title.split(' ');

	let splitTitle = {
		firstLine: words.length > 2 ? words.slice(0, -2).join(' ') : (words[0] ?? ''),
		secondLine: words.length > 2 ? words.slice(-2).join(' ') : words.slice(1).join(' ')
	};
</script>

<section>
	<h2>
		{#if splitTitle.firstLine}
			<span class="outline">{splitTitle.firstLine}</span>
		{:else}
			<span class="outline">Geen titel</span>
		{/if}
		{#if splitTitle.secondLine}
			<span>{splitTitle.secondLine}</span>
		{:else}
			<span>Geen subtitel</span>
		{/if}
	</h2>

	{#if heroInfo.description}
		<p>{heroInfo.description}</p>
	{:else}
		<p>Geen omschrijving beschikbaar.</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin: 5em 0 3em 0;
		padding: 1em;
		background-color: var(--main-color-beige);
		color: var(--main-color-green);
		font-size: 1em;
	}

	h2 {
		text-transform: uppercase;
	}

	h2 span {
		display: block;
	}

	.outline {
		color: transparent;
		-webkit-text-stroke: 1.5px var(--main-color-green);
	}

	/* Tablet */
	@media (min-width: 48rem) {
		section {
			margin: 5.25em 0 3.25em 0;
			gap: 1.25em;
			padding: 1.25em;
		}

		p {
			max-width: 25em;
		}
	}

	/* Desktop */
	@media (min-width: 74rem) {
		section {
			margin: 5.5em 0 3.5em 0;
			gap: 1.5em;
			padding: 1.5em;
		}

		p {
			max-width: 31.25em;
		}
	}
</style>
