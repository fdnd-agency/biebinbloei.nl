<script>
	export let data;
	import { Button, Dot, CardslidesContent, CardslidesLeaf } from '$lib/index.js';
</script>

<section class="card-container">
	{#if data?.cardSlides?.length}
		{#each data.cardSlides as cardSlide}
			<article class={cardSlide.cardStyles.backgroundColor}>
				<header>
					<CardslidesLeaf svgFill={cardSlide.leafStyles.svgFill} />
					<Dot svgFill={cardSlide.svgStyles.svgFill} />
					<CardslidesContent
						titleCard={cardSlide.titleCard}
						titleColor={cardSlide.cardStyles.titleColor}
					/>
				</header>

				<picture>
					<img width="100" height="100" loading="lazy" src={cardSlide.imageCard.url} alt="" />
				</picture>

				<CardslidesContent
					paragraphCard={cardSlide.paragraphCard}
					paragraphCard2={cardSlide.paragraphCard2}
					paragraphColor={cardSlide.cardStyles.paragraphColor}
				/>

				<div class="btn-container">
					<Button
						href={cardSlide.buttonStyles.href}
						buttonText={cardSlide.buttonStyles.buttonText}
						buttonClass={cardSlide.buttonStyles.buttonClass}
						svgFill={cardSlide.buttonStyles.svgFill}
					/>
				</div>
			</article>
		{/each}
	{:else}
		<p class="error-message">Geen projectkaarten gevonden.</p>
	{/if}
</section>

<style>
	.card-container {
		container-type: inline-size;
		container-name: slidecards;
	}

	article {
		align-items: center;
		position: relative;
		padding: 2rem 1rem;
		bottom: 3rem;
		margin: 0 auto;
		z-index: 1;
		overflow: hidden;
		border-radius: var(--border-bigCard);
	}

	img,
	picture {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--border-bigCard);
	}

	/* backgroundColor variants */
	.bg-green {
		background-color: var(--card-color-green);
	}

	.bg-beige {
		background-color: var(--main-color-beige);
	}

	.bg-brown {
		background-color: var(--card-color-brown);
	}

	.bg-orange {
		background-color: var(--card-color-orange);
	}

	.error-message {
		font-size: 1.5rem;
		color: var(--main-color-red);
	}

	/* Container Queries */

	/* Ipad mini */
	@container slidecards (min-width: 37.5rem) and (max-width: 50rem) {
		header {
			display: flex;
			margin-top: 3rem;
			align-items: flex-start;
		}

		img {
			height: 50vw;
		}

		.btn-container {
			width: 14rem;
			margin: 0rem 7rem 0 1rem;
		}
	}

	/* Ipad air and Ipad pro */
	@container slidecards (min-width: 50rem) and (max-width: 64rem) {
		header {
			display: flex;
			align-items: flex-start;
		}

		article {
			width: 95vw;
			display: grid;
			grid-template-columns: 2fr 2fr;
		}

		article picture {
			display: flex;
			justify-content: end;
			grid-column-start: 2;
			grid-row-start: 1;
			grid-row-end: 4;
		}

		.btn-container {
			width: 14em;
			margin: 0rem 7em 0 0;
		}
	}

	/* Desktop */
	@container slidecards (min-width: 64rem) {
		header {
			display: flex;
			align-items: flex-start;
		}

		article {
			padding: 2rem 1rem;
			width: 95vw;
			display: grid;
			grid-template-rows: auto 1fr auto;
			grid-template-columns: 1fr 1fr;
		}

		article::before {
			width: 26rem;
			height: 26rem;
		}

		article picture {
			display: flex;
			justify-content: end;
			grid-column-start: 2;
			grid-row-start: 1;
			grid-row-end: 4;
		}

		img {
			height: 100%;
			width: 32rem;
		}

		.btn-container {
			width: 14rem;
			padding-top: 1rem;
			margin: 0rem 7rem 0 4rem;
		}
	}

	@container slidecards (min-width: 100rem) {
		header {
			display: flex;
			align-items: baseline;
		}

		/* article {
			max-width: 1600px;
		} */
	}
</style>
