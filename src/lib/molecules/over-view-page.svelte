<script>
	let data;
	import { Button } from '$lib/index.js';
	let { viewPageData } = $props();
</script>

<section>
	{#each viewPageData.product as item}
		<article>
			<a href="/{item.projectnaam}/{item.slug}">
				<h3>{item.naam}</h3>
				<img
					src={item.fotos[0].url}
					alt=""
					loading="lazy"
					width={item.fotos[0]?.width || 'auto'}
					height={item.fotos[0]?.height || 'auto'}
				/>
			</a>
		</article>
	{/each}
</section>

<style>
	section {
		padding: 2em;
		display: grid;
		margin-top: -3rem;
		grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
		gap: 1rem;
	}

	article {
		position: relative;
		min-height: 50vh;
		width: 100%;
		max-width: 30rem;
		border-radius: var(--border-card);
		overflow: hidden;
		margin-top: 1rem;
	}

	article a {
		text-decoration: none;
		display: flex;
		width: 100%;
		height: 100%;
	}

	article a:focus img,
	article a:focus h3 {
		border: 5px solid var(--card-color-orange);
	}

	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h3 {
		position: absolute;
		bottom: 0;
		color: white;
		font-size: clamp(1em, 3.5vh, 2em);
		line-height: 1.5em;
		z-index: 5;
		padding: 1rem;
		width: 100%;
		min-height: 25%;
		background: var(--main-color-brown);
		display: flex;
		align-items: center;
	}

	@media (min-width: 64em) {
		/* 1024px / 16 = 64em */
		article {
			min-height: 60vh;
		}
	}
</style>
