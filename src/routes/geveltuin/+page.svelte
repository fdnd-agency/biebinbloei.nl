<script>
	export let data;
	import { GeveltuinButton } from '$lib/index.js';
	import { HeroHeaders, IntroHeaders, ImageCarousel } from '$lib/index.js';

	const bulletPoints1 = data.facadeGardenActions[0].bulletText1.split('.');
</script>

<HeroHeaders heroInfo={data.heroHeaders[2]} />
<IntroHeaders heroInfo={data.heroHeaders[2]} />

<ImageCarousel heroInfo={data.heroHeaders[2]} />

<section class="beige">
	<article>
		<h2 class="action-title">{data.facadeGardenActions[0].title}</h2>

		<p class="intro-p">{data.facadeGardenActions[0].description}</p>

		<ul class="action-ul">
			{#each bulletPoints1 as point}
				{#if point.trim() !== ''}
					<li>{point}</li>
				{/if}
			{/each}
		</ul>

		<GeveltuinButton
			buttonClass="btn-green"
			href="/contact"
			buttonText="Aanmelden"
			svgFill="svg-beige"
		/>
	</article>

	<picture>
		<img src={data.facadeGardenActions[0].image.url} alt="" />

		<p class="resident-henk">
			{data.facadeGardenActions[1].description}
		</p>
	</picture>
</section>

<style>
	/* mobile styling */
	section {
		padding: 3em;
	}

	.beige {
		margin-top: 5rem;
		margin-bottom: 1rem;
		background-color: var(--main-color-beige);
	}

	p {
		line-height: var(--line-height-paragraph);
	}

	.resident-henk {
		margin-top: 0;
	}

	p,
	ul {
		margin-top: 3em;
		margin-bottom: 2em;
		font-family: 'Poppins-Regular';
	}

	ul {
		padding-left: 0;
		list-style-image: url('/assets/circle-green.svg');
	}

	li {
		margin-bottom: 1em;
		padding-left: 0.5em;
	}

	h2 {
		font-size: 2em;
		line-height: 1.1em;
		color: var(--card-color-green);
		font-family: var(--header-font);
	}

	.action-title {
		color: var(--card-color-green);
	}

	img {
		width: 65vw;
		margin-top: 2rem;
		border-radius: 1rem;
	}

	@media (min-width: 64rem) {
		h2 {
			font-size: 4em;
			margin-left: 1.4rem;
		}

		.intro-p {
			width: 38vw;
			margin-left: 1.4rem;
		}

		section {
			width: 85vw;
			display: flex;
			margin: 0 auto;
			overflow-x: hidden;
			align-items: center;
			border-radius: var(--border-bigCard);
		}

		.beige {
			position: relative;
		}

		.beige::after {
			top: -3em;
			right: -6em;
			width: 25em;
			height: 25em;
			opacity: 0.5;
			position: absolute;
			transform: rotate(-45deg);
			content: url(/assets/leaf-orange.svg);
		}

		img {
			width: 30vw;
			margin-top: 12em;
		}

		ul {
			margin-right: 4em;
			padding-left: 6em;
		}

		.action-ul {
			padding: 1em;
		}
	}

	@media (min-width: 48rem) and (max-width: 64rem) {
		h2,
		.intro-p {
			margin-left: 0.6rem;
		}

		p {
			width: 55vw;
		}

		img {
			width: 37vw;
		}
	}

	@media (min-width: 100rem) {
		h2 {
			font-size: 5em;
			margin-top: 1em;
		}

		h2,
		.intro-p {
			margin-left: 2.8rem;
		}

		ul,
		p {
			width: 40vw;
			font-size: 1.5em;
			margin-left: 0.5em;
		}

		img {
			width: 30vw;
		}
	}
</style>
