<script>
	let data;
	import { Button } from '$lib/index.js';
	let { viewPageData } = $props();
</script>

<div class="card-container">
	<section class="card-wrapper">
		{#each viewPageData.product as item}
			<article>
				<h3>{item.naam}</h3>
				<img
					src={item.fotos[0].url}
					alt=""
					loading="lazy"
					width={item.fotos[0]?.width || 'auto'}
					height={item.fotos[0]?.height || 'auto'}
				/>

				<Button
					href="/{item.projectnaam}/{item.slug}"
					buttonText="Aanmelden"
					buttonClass="btn-beige"
					svgFill="svg-brown"
				></Button>
			</article>
		{/each}
	</section>
</div>

<style>
	.card-container {
		container-type: inline-size;
		container-name: cards;
		padding: 2rem;
	}

	.card-wrapper {
		display: grid;
		margin-top: -3rem;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	article {
		width: 100%;
		overflow: hidden;
		margin-top: 1rem;
		min-height: 50vh;
		position: relative;
		border-radius: var(--border-card);
	}

	img {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		object-fit: cover;
	}

	h3 {
		bottom: 0;
		z-index: 5;
		width: 100%;
		padding: 1rem;
		display: flex;
		color: white;
		min-height: 25%;
		position: absolute;
		line-height: 1.5em;
		align-items: center;
		font-size: clamp(1em, 3.5vh, 2em);
		background: var(--main-color-brown);
	}

	@container cards (min-width: 40rem) {
		.card-wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@container cards (min-width: 64rem) {
		.card-wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
