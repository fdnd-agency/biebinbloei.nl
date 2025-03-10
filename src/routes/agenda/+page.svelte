<script>
	import { HeroHeaders, Button } from '$lib/index.js';
	export let data;
</script>

<HeroHeaders heroInfo={data.heroHeaders[3]} />

<section>
	<ul>
		<!-- laad de meest recente event in -->
		<li class="recent-card">
			<picture>
				<img src={data.agendas[0].cardImage.url} alt="" />
			</picture>
			<h2>{data.agendas[0].event}</h2>
			<div>
				<address>{data.agendas[0].address}</address>
				<span>{data.agendas[0].price}</span>
				<time>{data.agendas[0].time}</time>
				<time>{data.agendas[0].date}</time>
				<Button href="/agenda" buttonText="Aanmelden" buttonClass="btn-green" svgFill="svg-beige" />
			</div>
		</li>

		<li class="no-styling">
			<p>{data.agendaTexts[0].agendaParagraph1}</p>
			<details id="details">
				<summary><span class="closed">Lees meer</span><span class="open">Lees minder</span></summary
				>
				<p>{data.agendaTexts[0].agendaParagraph2}</p>
				<p>{data.agendaTexts[0].agendaParagraph3}</p>
			</details>
		</li>

		<div class="rest-cards">
			{#each data.agendas.slice(1, 5) as agenda}
				<!-- laad de 4 meest recente events na de eerste in -->
				<li>
					<picture>
						<img src={agenda.cardImage.url} alt="" />
					</picture>
					<h2>{agenda.event}</h2>
					<div class="rest-card-text">
						<address>{agenda.address}</address>
						<span>{agenda.price}</span>
						<time>{agenda.time}</time>
						<time>{agenda.date}</time>
						<Button
							href="/contact"
							buttonText="Aanmelden"
							buttonClass="btn-brown"
							svgFill="svg-beige"
						/>
					</div>
				</li>
			{/each}
		</div>
	</ul>
</section>

<style>
	section {
		padding: 2rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	li {
		border-radius: 1rem;
		width: 90vw;
		display: flex;
		flex-direction: column;
		position: relative;
		align-content: flex-start;
		overflow-x: hidden;
	}

	li picture,
	li img {
		height: 100%;
		width: 100%;
	}

	li img {
		object-fit: cover;
		border-radius: 1rem;
	}

	.recent-card {
		height: 25rem;
		color: var(--text-color-white);
		justify-content: space-between;
		position: relative;
		overflow: hidden;
	}

	.recent-card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.45);
		z-index: 1;
		border-radius: 1rem;
	}

	.recent-card picture {
		border-radius: 1rem;
		position: absolute;
	}

	.recent-card img {
		z-index: 1;
		position: relative;
	}

	.recent-card h2 {
		position: relative;
		z-index: 2;
		padding: 1rem 0 0 1rem;
		font-size: 3rem;
	}

	.recent-card div {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	div {
		font-weight: 600;
	}

	.recent-card time {
		padding-bottom: 1rem;
	}

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

	.no-styling {
		background-color: var(--main-color-beige);
		border-radius: 1rem;
		padding: 1rem;
		width: 90vw;
		overflow: hidden;
		position: relative;
	}

	.no-styling p {
		margin: 0 0 1rem 0;
	}

	details[open] summary .closed,
	details:not([open]) summary .open {
		display: none;
	}

	details[open] summary .open,
	details:not([open]) summary .closed {
		display: inline;
	}

	details {
		margin: 0;
		padding: 0;
	}

	summary {
		color: var(--main-color-orange);
		cursor: pointer;
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
			content: url('assets/leaf-light-green.svg');
			position: absolute;
			height: 75%;
			width: 75%;
			rotate: -25deg;
			transform: translateX(10rem);
		}
	}
</style>
