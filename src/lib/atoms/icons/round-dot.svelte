<script>
	let { svgFill } = $props();
</script>

<svg
	class="my-custom-svg"
	width="22"
	height="22"
	viewBox="0 0 42 42"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="21" cy="21" r="21" class={svgFill} />
</svg>

<style>
	/* svgFill variants */

	.svgfill-orange {
		fill: var(--main-color-orange);
	}

	.svgfill-beige {
		fill: var(--main-color-beige);
	}

	svg {
		display: none;
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		svg {
			/* position: relative;
            top: .5em; */
			margin: 1em 1em 1em 0;
			width: 3em;
			display: block;
		}
	}

	/* MEDIA QUERY TABLET = 1100px */
	@media (min-width: 68.75rem) {
		svg {
			top: 0.7em;
			display: block;
		}
	}

	/* MEDIA QUERY TABLET = 1250px */
	@media (min-width: 78.1rem) {
		svg {
			top: 1.2em;
			display: block;
		}
	}

	@media (min-width: 48rem) and (max-width: 64rem) {
		svg {
			margin-top: 0.3em;
			display: block;
		}
	}

	@media (min-width: 100rem) {
		svg {
			margin-top: 8em;
			width: 2em;
			height: 2em;
			display: block;
		}
	}
</style>
