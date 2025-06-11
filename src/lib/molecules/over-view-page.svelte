<script>
	import { Button } from '$lib/index.js';
	let { viewPageData } = $props();
</script>

<section class="card-container">
	<ul class="card-wrapper">
		{#each viewPageData.product as item}
			<li>
				<article>
					<h3>{item.naam}</h3>
					<img
						src={item.fotos[0].url}
						alt={`Foto van ${item.naam}`}
						loading="lazy"
						width={item.fotos[0]?.width}
						height={item.fotos[0]?.height}
					/>
					<Button
						href="/{item.projectnaam}/{item.slug}"
						buttonText="Verzorging tips"
						buttonClass="btn-beige"
						svgFill="svg-brown"
					/>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	.card-container {
		container-type: inline-size;
		container-name: cards;
		padding: 1.5rem;
	}

	.card-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		@container cards (min-width: 40rem) {
			grid-template-columns: repeat(2, 1fr);
		}

		@container cards (min-width: 64rem) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	ul {
		list-style: none;
	}

	article {
		display: flex;
		overflow: hidden;
		flex-direction: column;
		gap: 1rem;
		min-height: 50vh;
		position: relative;
		border-radius: var(--border-card);
	}

	h3 {
		bottom: 0;
		z-index: 5;
		width: 100%;
		height: 25vh;
		padding: 1rem;
		display: flex;
		color: white;
		align-items: flex-start;
		position: absolute;
		font-size: clamp(1em, 3.3vh, 2em);
		background: var(--main-color-brown);

		@container cards (min-width: 64rem) {
			height: 19vh;
			align-items: self-start;
		}
	}

	img {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		object-fit: cover;
	}
</style>
