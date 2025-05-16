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
		{#each data.agendas.slice(0, 8) as agenda}
		<li>
			<picture>
				<img src={agenda.cardImage.url} alt="" />
			</picture>
			<h3>{agenda.event}</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi maxime quis voluptatibus esse, odit error minima. Nam delectus debitis, veritatis porro architecto culpa, a sint eos, minima deleniti cum.</p>
			<time>{agenda.date}</time>
			<time>{agenda.time}</time>
			<address>{agenda.address}</address>
			<Button href="/agenda" buttonText="Aanmelden" buttonClass="btn-green" svgFill="svg-beige" />
		</li>
		{/each}
	</ul>
</section>

<style>
	/* nieuw ontwerp */
	.workshops {
		margin: 1.25em 1em 1em 1em;
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
		width: 18em;
		height: 28em;
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
		/* margin-top: 1em; */
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

	/* oud ontwerp 
	.rest-cards {
		grid-area: rest;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.rest-cards > li {
		background-color: var(--main-color-beige);
		height: 15rem;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		padding-right: 2rem;
	}

	.rest-cards > li picture {
		width: 40%;
		padding: 1rem;
	}

	.rest-cards > li div {
		display: flex;
		margin-bottom: 1rem;
		flex-direction: column;
		align-items: flex-start;
	}

	.rest-cards > li h2 {
		margin-top: 1rem;
		font-size: 1.1rem;
	}

	.rest-cards > li div time {
		margin-bottom: 1rem;
	}

	

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		ul {
			gap: 2rem;
		}

		li {
			width: 90vw;
		}
	}

	/* MEDIA QUERY TABLET = 1100px */
	@media (min-width: 68.75rem) {
		.Aankondiging-texts {
			font-size: clamp(2em, 10vw, 3em);
		}

		li {
			width: auto;
			margin: 0;
		}

		ul {
			display: grid;
			grid-template-columns: 2fr 2fr;
			grid-template-rows: repeat(5, 1fr);
			grid-template-areas:
				'recent rest'
				'recent rest'
				'recent rest'
				'text rest'
				'text rest';
			gap: 2rem;
			width: 100%;
			height: 100%;
		}

		.recent-card {
			grid-area: recent;
			height: 100%;
		}

		.no-styling {
			grid-area: text;
			height: 100%;
			padding: 2rem 5rem;
			width: auto;
		}

		.no-styling p,
		.no-styling details {
			z-index: 1;
		}

		.no-styling::before {
			content: url(assets/leaf-light-green.svg);
			position: absolute;
			height: 75%;
			width: 75%;
			rotate: -25deg;
			transform: translateX(10rem);
		}
	}

	@media (min-width: 100rem){
		p{
			font-size: 1.1em;
		}
	}
</style>