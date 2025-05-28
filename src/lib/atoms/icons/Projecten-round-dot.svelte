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
	<circle cx="21" cy="21" r="21" fill={svgFill} />
</svg>

<style>
	svg {
		width: 1rem;
		margin: 0.7em;
	}

	@media (min-width: 48rem){
		svg {
			display: none;
		}
	}

	@media (min-width: 48rem) and (max-width: 64rem) {
		svg {
			display: none;
		}
	}

	@media (min-width: 65em) {
		svg {
			display: none;
		}
	}
</style>
