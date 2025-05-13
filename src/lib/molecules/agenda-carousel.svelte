<script>
	import { AgendaButton } from '$lib/index.js';
	import { onMount } from 'svelte';
	let { data } = $props();

	let agendaContainer = $state();

	function scrollPrev() {
		// Check if smooth scroll is supported
		if ('scrollBehavior' in document.documentElement.style) {
			agendaContainer.scrollBy({ left: -agendaContainer.offsetWidth, behavior: 'smooth' });
		} else {
			agendaContainer.scrollBy({ left: -agendaContainer.offsetWidth });
		}
	}

	function scrollNext() {
		// Check if smooth scroll is supported
		if ('scrollBehavior' in document.documentElement.style) {
			agendaContainer.scrollBy({ left: agendaContainer.offsetWidth, behavior: 'smooth' });
		} else {
			agendaContainer.scrollBy({ left: agendaContainer.offsetWidth });
		}
	}

	onMount(() => {
		const buttons = document.querySelector('.caroussel-buttons');
		if (buttons) {
			buttons.classList.remove('hidden');
		}
	});
</script>

<!-- AGENDA-CAROUSEL - PREV-NEXT BUTTON CODE -->
<article class="caroussel-buttons hidden">
	<button type="button" aria-label="previousbutton" onclick={scrollPrev}
		><img
			class="arrow"
			src="./assets/arrow-prev.svg"
			alt="arrow-prev"
			width="100"
			loading="lazy"
		/></button
	>

	<button type="button" aria-label="nextbutton" onclick={scrollNext}
		><img
			class="arrow"
			src="./assets/arrow-next.svg"
			alt="arrow-next"
			width="100"
			loading="lazy"
		/></button
	>
</article>

<!-- AGENDA-CAROUSEL - CARD CODE -->
<article>
	<div class="scroll-container" bind:this={agendaContainer}>
		{#each data.agendas as agenda}
			<div class="card">
				<div class="content">
					<h3>{agenda.event}</h3>
					<time>{agenda.date}</time>
					<time>{agenda.time}</time>
					<address>{agenda.address}</address>
					<p>{agenda.price}</p>

					<AgendaButton
						href="/agenda"
						buttonText="Aanmelden"
						buttonClass="btn-beige"
						svgFill="svg-brown"
					/>
				</div>
				<img src={agenda.cardImage.url} alt="workshop" width="100" loading="lazy" />
			</div>
		{/each}
	</div>
</article>

<!-- AGENDA-CAROUSEL STYLING  -->
<style>
	article {
		overflow: hidden;
		max-width: 100%;
	}

	.scroll-container {
		display: flex;
		gap: 2rem;
		overflow: auto;
		scrollbar-width: none;
		scroll-snap-type: x mandatory;
	}

	.scroll-container::-webkit-scrollbar {
		display: none;
	}

	.card {
		display: flex;
		align-items: stretch;
		min-width: calc(100vw - 4rem);
		min-height: 15em;
		position: relative;
		scroll-snap-align: start;
	}

	.card:last-child {
		margin-right: 3rem;
	}

	.content {
		position: relative;
		z-index: 1;
		width: 13em;
		height: 100%;
		padding: 0.5em;
		border-top-left-radius: 0.8em;
		border-bottom-left-radius: 0.8em;
		background-color: var(--main-color-brown);
		padding: 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--main-color-beige);
	}

	img {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.8em;
	}

	button {
		display: none;
	}

	.hidden {
		display: none !important;
	}

	/* DESKTOP */
	@media (min-width: 64rem) {
		/* PREV-NEXT BUTTON STYLING */
		.caroussel-buttons {
			z-index: 3;
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

		.arrow {
			width: 2em;
			margin-left: -1em;
		}

		/* SCROLL-DRIVEN-ANIMATIONS STYLING */
		@supports (animation-timeline: view()) {
			.card {
				animation-timeline: view(inline);
				animation-name: animate-in-and-out;
			}

			@keyframes animate-in-and-out {
				entry 0% {
					opacity: 0;
					transform: translate(100%);
				}
				entry 100% {
					opacity: 1;
					transform: translateX(0);
				}

				exit 0% {
					opacity: 1;
					transform: translateX(0);
				}
				exit 100% {
					opacity: 0;
					transform: translate(-10%);
				}
			}
		}
	}

	/* BIG SCREENS (DESKTOP) */
	@media (min-width: 100rem) {
		.card {
			min-width: 25rem;
		}
	}

	/* TABLET */
	@media (min-width: 48rem) and (max-width: 64rem) {
		.scroll-container {
			width: 75vw;
		}
	}

	@media (min-width: 48rem) {
		.card {
			min-width: 25rem;
		}
	}
</style>
