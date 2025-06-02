<script>
	import { HeroHeaders, Logoround, Projectenrounddot } from '$lib/index.js';
	let { data } = $props();
</script>

<HeroHeaders heroInfo={data.heroHeaders[6]} />

<main>

	<section>
		<div>
			<Projectenrounddot svgFill="var(--main-color-orange)" />
			<h2>
				<strong class="first-four-words">{data.abouts[0].title.slice(0, 4)}</strong>
				<strong>{data.abouts[0].title.slice(4)}</strong>
			</h2>
		</div>

	<section class="video-wrapper" aria-label="Event highlight video">
		<iframe
  			loading="lazy"
  			width="100%"
  			height="480"
  			src="https://www.youtube.com/embed/qEykT9dSNfg"
  			title="Openingsfeest Bieb in Bloei"
  			frameborder="0"
  			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  			allowfullscreen>
		</iframe>
	</section>

		<Logoround />
		<p>{data.abouts[0].description}</p>
		<p>{data.abouts[0].description2}</p>
		<p>{data.abouts[0].description3}</p>
		<p>{data.abouts[0].description4}</p>
	</section>
</main>

<style>
	/* MOBILE */
	main {
		width: 100%;
		margin-bottom: 2rem;
		background-color: var(--main-color-beige);
	}

	section {
		padding: 2em;
	}

	section > div {
		width: 100%;
		display: flex;
		margin-left: -0.6em;
	}

	h2 {
		font-size: 1.7em;
		margin-top: 0.3em;
		line-height: 1.1em;
		color: var(--card-color-green);
		font-family: var(--header-font);
	}

	.first-four-words {
		color: var(--main-color-brown);
		margin-right: 0.1em;
	}

	p {
		margin-top: 1em;
		font-family: 'Poppins-Regular';
		line-height: var(--line-height-paragraph);
	}

	p:nth-child(6) {
		font-style: oblique;
		font-weight: bolder;
	}

	.video-wrapper iframe {
		border-radius: var(--border-card);
  	}

	/* MEDIA QUERY STYLING */
	/* DESKTOP */
	@media (min-width: 64em) {
		main {
			top: -1em;
			width: 80vw;
			padding: 2em;
			margin: 0 auto;
			position: relative;
			overflow-x: hidden;
			border-radius: var(--border-bigCard);
		}

		main::after {
			top: -4rem;
			width: 25rem;
			opacity: 0.5;
			right: -8rem;
			position: absolute;
			transform: rotate(-45deg);
			content: url(/assets/leaf-orange.svg);
		}

		section > div {
			margin-left: -0.1em;
		}

		h2,
		p {
			width: 47vw;
			display: flex;
			margin: 0 auto;
		}

		h2 {
			font-size: 3.5em;
		}

		.first-four-words {
			margin-right: 0.3em;
		}

		p {
			margin-top: 1.5em;
		}

		.video-wrapper {
    		position: relative;
    		padding-bottom: 28.25%; 
    		height: 0;
    		overflow: hidden;
			width: 47vw;
			display: flex;
			margin: 0 auto;
  		}

  		.video-wrapper iframe {
			border-radius: var(--border-card);
  		}
	}

	/* TABLET */
	@media (min-width: 48rem) and (max-width: 64rem) {
		main {
			top: -1em;
			width: 85vw;
			padding: 2em;
			margin: 0 auto;
			position: relative;
			border-radius: var(--border-bigCard);
		}

		main::after {
			width: 22rem;
		}

		section > div {
			margin-left: -0.1em;
		}

		h2 {
			font-size: 3em;
		}

		.video-wrapper iframe {
			border-radius: var(--border-card);
  		}
	}

	/* BIG DESKTOP SCREEN */
	@media (min-width: 100rem) {
		main {
			width: 78vw;
		}

		main::after {
			width: 30rem;
		}

		h2 {
			font-size: 5em;
		}

		h2,
		p {
			max-width: 40vw;
		}

		p {
			font-size: 1.5em;
			line-height: 1.5em;
			margin-top: 1.5em;
		}

		.video-wrapper {
    		position: relative;
    		padding-bottom: 36.25%; 
    		height: 0;
    		overflow: hidden;
			max-width: 44vw;
			display: flex;
			margin: 0 auto;
  		}

  		.video-wrapper iframe {
			border-radius: var(--border-card);
  		}
	}
</style>
