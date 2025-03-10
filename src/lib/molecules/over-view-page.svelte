<script>
	let data;
	import { Button } from '$lib/index.js';
	export let viewPageData;
	console.log(viewPageData);
</script>

<h2>Binnenkort vind je hier de nieuwste Zaden!</h2>
<h2>{viewPageData.titel}</h2>

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
	h2 {
		font-family: var(--header-font);
		font-size: clamp(2em, 10vw, 3em);
		line-height: 1.25;
		margin-top: 1em;
		padding: 0.5em 1em 0 1em;
	}

	section {
		padding: 2em;
		display: grid;
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

	article a:hover img {
		scale: 1.1;
	}

	article a:focus img,
	article a:focus h3 {
		border: 8px solid var(--card-color-orange);
	}

	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: ease-out 0.35s;
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
		transition: opacity 0.4s ease;
		align-items: center;
	}

	article a:hover h3 {
		opacity: 0;
	}

	@media (min-width: 64em) {
		/* 1024px / 16 = 64em */
		article {
			min-height: 60vh;
		}
	}
</style>
