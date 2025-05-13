<script>
	import { HeroHeaders, IntroHeaders } from '$lib/index.js';
	let { data } = $props();
</script>

<HeroHeaders heroInfo={data.heroHeaders[4]} />
<IntroHeaders heroInfo={data.heroHeaders[4]} />

<main>
	{#if data.partners && data.partners.length > 0}
		{#each data.partners as partner}
			<article>
				<h2>{partner.title}</h2>
				<h3>{partner.subhead}</h3>
				<p>{partner.description}</p>
				<p>{partner.description2}</p>
			</article>
		{/each}
	{:else}
		<p class="error-message">Oeps, er is momenteel geen content beschikbaar</p>
	{/if}
</main>

<style>
	/* MOBILE STYLING */
	main {
		gap: 2em;
		display: grid;
		margin-top: 1em;
		margin-bottom: 3em;
		grid-template-columns: 1fr;
	}

	article {
		width: 100%;
		padding: 2em;
		background-color: var(--main-color-beige);
	}

	article:first-child {
		margin-top: 2em;
	}

	h2 {
		font-size: 2em;
	}

	h3 {
		font-size: 1.1em;
	}

	h2,
	h3 {
		color: var(--card-color-green);
	}

	p {
		margin-top: 1em;
		line-height: var(--line-height-paragraph);
	}

	/* Error styling */
	.error-message {
		color: red;
		font-weight: bold;
		text-align: center;
		margin-top: 2em;
	}

	/* TABLET STYLING */
	/* NORMAL FORMAT TABLET STYLING */
	@media (min-width: 48rem) {
		main {
			gap: 2em;
			padding: 2em;
			display: grid;
			align-items: top;
			justify-content: center;
			grid-template-columns: 1fr;
		}

		article {
			border-radius: var(--border-card);
		}
	}

	/* DESKTOP STYLING */
	@media (min-width: 74rem) {
		main {
			gap: 2em;
			padding: 2em;
			display: grid;
			align-items: top;
			justify-content: center;
			grid-template-columns: repeat(2, 1fr);
		}

		article {
			padding: 3em;
			height: auto;
			margin-top: 2em;
			border-radius: var(--border-card);
			background-color: var(--main-color-beige);
		}

		article:first-child {
			margin-top: 2em;
		}

		h2 {
			font-size: 3em;
		}

		h3 {
			font-size: 1.5em;
		}
	}

	/* BIG DESKTOP SCREEN STYLING */
	@media (min-width: 100rem) {
		h2 {
			font-size: 5em;
		}

		h3 {
			font-size: 3em;
		}

		p {
			width: 40vw;
			font-size: 1.5em;
		}
	}
</style>
