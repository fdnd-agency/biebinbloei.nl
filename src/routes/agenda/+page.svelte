<script>
	import { HeroHeaders, IntroHeaders, Button } from '$lib/index.js';
	let { data } = $props();
</script>

<HeroHeaders heroInfo={data.heroHeaders[3]} />

<section class="intro">
	<IntroHeaders heroInfo={data.heroHeaders[3]} />
</section>

<section class="workshops">
	<h2>
		<span class="outline">{data.sectionInfos[1].title.split(' ')[0]}</span><br />
		{data.sectionInfos[1].title.split(' ')[1]}
	</h2>
	{#if data.agendas && data.agendas.length > 0}
	<ul>
		{#each data.agendas as agenda}
		<li>
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
			<Button href="/contact" buttonText="Aanmelden" buttonClass="btn-brown" svgFill="svg-beige" />
		</li>
		{/each}
	</ul>
	{:else}
	<p>Er zijn momenteel geen workshops beschikbaar.</p>
	{/if}
</section>

<style>
	.workshops {
		margin: 1em;
	}

	h2 {
		margin-bottom: 0.25em;
		text-transform: uppercase;
		color: var(--main-color-brown);
	}

	.outline {
		color: transparent;
		-webkit-text-stroke: 1.5px var(--main-color-brown);
	}

	ul {
		display: flex;
		flex-direction: column;
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

	li:nth-child(2) {
		background-color: var(--main-color-brown);
		color: var(--main-color-beige);
	}

	li:nth-child(4),
	li:nth-child(6) {
	background-color: var(--main-color-green);
	color: var(--main-color-beige);
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

	:global(li:nth-child(2) .button-wrapper a) {
		background-color: var(--main-color-beige);
		color: var(--main-color-brown);
	}

	:global(
	li:nth-child(4) .button-wrapper a,
	li:nth-child(6) .button-wrapper a) {
		background-color: var(--main-color-beige);
		color: var(--main-color-green);
	}

	:global(
	li:nth-child(2) .button-wrapper a svg,
	li:nth-child(4) .button-wrapper a svg,
	li:nth-child(6) .button-wrapper a svg) {
		fill: currentColor;
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