<script>
	import { onMount } from 'svelte';
	let { heroInfo } = $props();
	let images = heroInfo.carouselImage[0].images;

	let carouselContainer = $state();

	function scrollPrev() {
		// Check if smooth scroll is supported
		if ('scrollBehavior' in document.documentElement.style) {
			carouselContainer.scrollBy({ left: -carouselContainer.offsetWidth, behavior: 'smooth' });
		} else {
			carouselContainer.scrollBy({ left: -carouselContainer.offsetWidth });
		}
	}

	function scrollNext() {
		// Check if smooth scroll is supported
		if ('scrollBehavior' in document.documentElement.style) {
			carouselContainer.scrollBy({ left: carouselContainer.offsetWidth, behavior: 'smooth' });
		} else {
			carouselContainer.scrollBy({ left: carouselContainer.offsetWidth });
		}
	}

	onMount(() => {
		const buttons = document.querySelector('.caroussel-buttons');
		if (buttons) {
			buttons.classList.remove('hidden');
		}
	});
</script>

<section class="carousel-container">
	<article class="caroussel-buttons hidden">
		<div class="button-container">
			<button type="button" onclick={scrollPrev}
				><img
					class="arrow"
					src="./assets/arrow-prev.svg"
					alt="arrow-prev"
					width="100"
					loading="lazy"
				/></button
			>
			<p class="desktop-only">Vorige</p>
		</div>

		<div class="button-container">
			<button type="button" onclick={scrollNext}
				><img
					class="arrow"
					src="./assets/arrow-next.svg"
					alt="arrow-next"
					width="100"
					loading="lazy"
				/></button
			>
			<p class="desktop-only">Volgende</p>
		</div>
	</article>

	<div class="scroll-container" bind:this={carouselContainer}>
		{#if images.length > 0}
			{#each images as image}
				<div class="content">
					<img src={image.url} alt="" loading="lazy" />
				</div>
			{/each}
		{:else}
			<p>Geen afbeeldingen gevonden.</p>
		{/if}
	</div>
</section>

<style>
	.carousel-container {
		margin-top: 3rem;
		overflow: hidden;
		margin-bottom: -4rem;
		container-type: inline-size;
		container-name: carousel;
	}

	.scroll-container {
		display: flex;
		gap: 1rem;
		margin: 1rem;
		overflow-x: auto;
		scrollbar-width: none;
		scroll-snap-type: x mandatory;
	}

	.scroll-container::-webkit-scrollbar {
		display: none;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.8rem;
	}

	.content {
		scroll-snap-align: start;
		padding: 0.5rem;
	}

	button {
		display: none;
	}

	.hidden {
		display: none !important;
	}

	p.desktop-only {
		display: none;
	}

	@container carousel (max-width: 37.5rem) {
		.content {
			min-width: 90%;
			height: 40vh;
		}
	}

	@container carousel (min-width: 37.5rem) and (max-width: 64rem) {
		.content {
			min-width: calc(20rem - 2rem);
			max-height: 30rem;
		}

		.scroll-container {
			margin: 1rem;
			margin-bottom: 2rem;
		}
	}

	@container carousel (min-width: 64rem) {
		.content {
			min-width: calc(20rem - 2rem);
			max-height: 25rem;
		}

		.scroll-container {
			gap: 1rem;
		}

		.carousel-container {
			margin: 2rem;
		}

		.caroussel-buttons {
			z-index: 3;
			margin-left: 2rem;
			position: relative;
			width: 6em;
			display: flex;
			margin-bottom: 1em;
			justify-content: space-between;
		}

		button {
			width: 40px;
			height: 40px;
			border: none;
			padding: 0.3em;
			display: block;
			cursor: pointer;
			border-radius: 50%;
			background-color: var(--main-color-brown);
		}

		button:hover {
			background: var(--main-color-green);
		}

		.button-container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.button-container:last-child p.desktop-only {
			margin-left: 1rem; /* Zorgt ervoor dat 'Volgende' meer naar rechts verschuift */
		}

		p.desktop-only {
			font-size: 1em;
			font-family: var(--paragraph-font);
			color: var(--main-color-brown);
			text-align: center;
			display: block;
			margin-top: 0.5rem;
		}
	}

	@container carousel (min-width: 100rem) {
		.content {
			min-width: calc(25rem - 1.5rem);
			max-height: 30rem;
		}

		.scroll-container {
			/* margin: 4rem; */
			gap: 1rem;
		}
	}
</style>
