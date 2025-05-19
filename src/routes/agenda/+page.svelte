<script>
	import { HeroHeaders, IntroHeaders, Button } from '$lib/index.js';
	let { data } = $props();
</script>

<HeroHeaders heroInfo={data.heroHeaders[3]} />

<section class="intro">
	<IntroHeaders heroInfo={data.heroHeaders[3]} />
</section>

<section class="workshops">
	<h2>ONZE WORKSHOPS</h2>
	<ul>
		{#each data.agendas as agenda}
		<li>
			<picture>
				<img src={agenda.cardImage.url} alt="" />
			</picture>
			<h3>{agenda.event}</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi maxime quis voluptatibus esse, odit error minima. Nam delectus debitis, veritatis porro architecto culpa, a sint eos, minima deleniti cum.</p>
			<time>{agenda.date}</time>
			<time>{agenda.time}</time>
			<address>{agenda.address}</address>
			<Button href="/agenda" buttonText="Aanmelden" buttonClass="btn-brown" svgFill="svg-beige" />
		</li>
		{/each}
	</ul>
</section>

<style>
	/* nieuw ontwerp */
	.workshops {
		margin: 3em 1em 1em 1em;
	}

	h2 {
		margin-bottom: 0.25em;
		color: var(--main-color-brown);
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
		height: 28em;
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
		/* .intro,
		.workshops {
			margin: 1.25em;
		} */

		ul {
			/* display: flex;
			flex-direction: row;
			flex-wrap: wrap; */
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
			gap: 1.25em;
		}
	}

	/* Desktop */
	@media (min-width: 74rem) {
		/* .intro,
		.workshops {
			margin: 1.5em;
		}

		ul {
			gap: 1.5em;
		} */
	}
</style>