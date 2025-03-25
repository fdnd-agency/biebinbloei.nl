<script>
	export let titleColor, paragraphColor, titleCard, paragraphCard, paragraphCard2;
</script>

<div>
	{#if titleCard}
		<h2 class={titleColor}>{titleCard}</h2>
	{/if}

	{#if paragraphCard}
		<p class={paragraphColor}>{paragraphCard}</p>
	{/if}

	{#if paragraphCard2}
		<p class={paragraphColor}>{paragraphCard2}</p>
	{/if}
</div>

<style>
	/* Mobile styling */
	h2 {
		line-height: 95%;
		margin-bottom: 0.5em;
		font-size: clamp(2em, 5vw, 8em);
		font-family: var(--header-font);
	}

	p {
		padding: 0.5em;
		line-height: var(--line-height-paragraph);
	}

	/* titleColor & paragraphColor variants */
	.title-green,
	.paragraph-green {
		color: var(--main-color-green);
	}

	.title-beige,
	.paragraph-beige {
		color: var(--main-color-beige);
	}

	.title-brown,
	.paragraph-brown {
		color: var(--main-color-brown);
	}

	/* Container Queries */

	/* Ipad mini */
	@container slidecards (min-width: 37.5em) and (max-width: 50em) {
		p {
			margin: 0.5em;
			padding: 0.5em;
			max-width: 65ch;
		}
	}

	/* Ipad air and Ipad pro */
	@container slidecards (min-width: 50em) and (max-width: 64em) {
		h2 {
			max-width: 80%;
			font-size: clamp(3rem, 5vw, 7rem);
		}

		p {
			margin-left: 3em;
			max-width: 40ch;
		}
	}

	/* Desktop */
	@container slidecards (min-width: 64em) {
		h2 {
			width: 4em;
			font-size: clamp(3em, 5vw, 6em);
		}

		p {
			max-width: 43em;
			margin: 0em 7em 0 4em;
		}
	}

	/* Large desktop styling */
	@container slidecards (min-width: 100em) {
		p {
			font-size: 1.3em;
			margin: 0em 7em 0 2.1em;
		}
	}
</style>
