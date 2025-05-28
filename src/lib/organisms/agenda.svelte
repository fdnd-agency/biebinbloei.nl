<script>
	import { AgendaCarousel } from '$lib/index.js';
	import AgendaInfoButton from '$lib/molecules/agenda-info-button.svelte';
	let { data } = $props();
</script>

<section>
	<img src="./assets/leaf-orange.svg" alt="" height="800" width="800" />
	<h2>{data.agendaTexts[1].title}</h2>
	<p>{data.agendaTexts[1].agendaParagraph1}</p>
	<AgendaInfoButton />
	<AgendaCarousel {data} />
</section>

<style>
	section {
		background: var(--main-color-beige);
		z-index: 2;
		max-width: 100%;
		overflow: hidden;
		padding: var(--section-padding-y) 0 var(--section-padding-y) 1rem;
	}

	img {
		display: none;
		position: absolute;
		rotate: 60deg;
		left: -13em;
		transform: translateY(200px) translateX(150px);
	}

	h2 {
		font-size: clamp(2em, 5vw, 8em);
		padding-bottom: 0.7em;
		font-family: var(--sub-header-font);
		color: var(--main-color-brown);
		align-self: baseline;
		z-index: 3;
	}

	p {
		padding-right: 1em;
		max-width: 65ch;
		margin-bottom: 2rem;
		line-height: var(--line-height-paragraph);
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		section {
			padding: var(--section-padding-y) 0 var(--section-padding-y) var(--section-padding-x);
		}

		p {
			z-index: 100;
			max-width: 70ch;
		}

		img {
			display: block;
		}
	}

	/* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
		section {
			padding: var(--section-padding-y) 15em;
		}
	}

	@media (min-width: 100rem) {
		p {
			font-size: 1.1em;
			position: relative;
			z-index: 100;
		}
	}
</style>
