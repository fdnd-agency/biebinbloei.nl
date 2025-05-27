<script>
	let { heroInfo } = $props();
</script>

<section>
	<h2>
		<span class="outline">{heroInfo.title.split(' ')[0]}</span><br />
		{heroInfo.title.split(' ')[1]}
	</h2>
	
	<p>{heroInfo.description}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin: 5em 0 3em 0;
		padding: 1em;
		background-color: var(--main-color-beige);
		color: var(--main-color-green);
		font-size: 1em;
	} 

	h2 {
		margin-top: -1em;
		text-transform: uppercase;
	}

	.outline {
		color: transparent;
		-webkit-text-stroke: 1.5px var(--main-color-green);
	}

	/* Tablet */
	@media (min-width: 48rem) {
		section {
			margin: 5.25em 0 3.25em 0;
			gap: 1.25em;
			padding: 1.25em;
		}

		h2 {
			margin-top: -1.125em;
		}

		p {
			max-width: 25em;
		}
	}

	/* Desktop */
	@media (min-width: 74rem) {
		section {
			margin: 5.5em 0 3.5em 0;
			gap: 1.5em;
			padding: 1.5em;
		}

		h2 {
			margin-top: -1.25em;
		}

		p {
			max-width: 31.25em;
		}
	}
</style>
