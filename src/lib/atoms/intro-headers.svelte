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
		margin: 5em auto 0 auto;
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
			gap: 1.25em;
			padding: 1.25em;
		}

		p {
			max-width: 400px;
		}
	}

	/* Desktop */
	@media (min-width: 74rem) {
		section {
			gap: 1.5em;
			padding: 1.5em;
		}

		p {
			max-width: 500px;
		}
	}
</style>
