<script>
	import { HeroHeaders, IntroHeaders, Button } from '$lib/index.js';
	let { data } = $props();

	data.agendas = data.agendas.map((agenda, index) => {
		const variantIndex = index % 4;
		let cardVariant, buttonClass;

		if (variantIndex === 0) {
			cardVariant = 'beige-brown'; 
			buttonClass = 'btn-brown'; 
		} else if (variantIndex === 1) {
			cardVariant = 'brown-beige';   
			buttonClass = 'btn-beige-brown';
		} else if (variantIndex === 2) {
			cardVariant = 'beige-green'; 
			buttonClass = 'btn-green';
		} else if (variantIndex === 3) {
			cardVariant = 'green-beige';
			buttonClass = 'btn-beige';
		}

		return { ...agenda, cardVariant, buttonClass };
	});
</script>

<HeroHeaders heroInfo={data.heroHeaders[3]} />

<IntroHeaders heroInfo={data.heroHeaders[3]} />

<main>
	{#if data.agendas && data.agendas.length > 0}
	<ul>
		{#each data.agendas as agenda}
		<li class={`card--${agenda.cardVariant}`}>
			<picture>
				<source srcset="{agenda.cardImage.url}?format=avif" type="image/avif" />
  				<source srcset="{agenda.cardImage.url}?format=webp" type="image/webp" />
				<img src={agenda.cardImage.url} alt="" width="230" height="124" loading="lazy" />
			</picture>
			<h3>{agenda.event}</h3>
			<p>{agenda.description}</p>
			<time>{agenda.date}</time>
			<time>{agenda.time}</time>
			<address>{agenda.address}</address>
			<p>{agenda.price}</p>
			<Button href="/contact" buttonText="Aanmelden" buttonClass={agenda.buttonClass} svgFill="svg-beige" />
		</li>
		{/each}
	</ul>
	{:else}
	<p>Er zijn momenteel geen workshops beschikbaar.</p>
	{/if}
</main>

<style>
	ul {
		display: flex;
		flex-direction: column;
		margin: 1em;
		gap: 1rem;
		list-style: none;
		color: var(--main-color-brown);
	}

	li {
		position: relative;
		height: 30em;
		background-color: var(--main-color-beige);
		border-radius: 1em;
		padding: 1em;
	}

	img {
		width: 100%;
		max-height: 124px;
		border-radius: 1em;
		object-fit: cover;
	}

	h3 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	p {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-bottom: 2em;
	}

	time {
		display: block;
	}

	time,
	address {
		font-weight: bold;
	}

	address {
		margin-bottom: 1em;
	}

	/* workshop cards varianten */
	.card--beige-brown {
		background-color: var(--main-color-beige);
		color: var(--main-color-brown);
	}

	.card--brown-beige {
		background-color: var(--main-color-brown);
		color: var(--main-color-beige);
	}

	.card--beige-green {
		background-color: var(--main-color-beige);
		color: var(--main-color-green);
	}

	.card--green-beige {
		background-color: var(--main-color-green);
		color: var(--main-color-beige);
	}

	/* Tablet */
	@media (min-width: 48rem) {
		.workshops {
			margin: 1.25em;
		}

		ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
			gap: 1.25em;
		}
	}

	/* Desktop */
	@media (min-width: 74rem) {
		.workshops {
			margin: 1.5em;
		}

		ul {
			gap: 1.5em;
		}
	}
</style>