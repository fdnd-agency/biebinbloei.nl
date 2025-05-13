<script>
	let { data } = $props();
</script>

<section>
	<h2>
		<span>{data.campusInfos[0].title}</span>
		<span>{data.campusInfos[0].title2}</span>
	</h2>

	<article>
		<p>{data.campusInfos[0].paragraph}</p>
		<p>{data.campusInfos[0].paragraph2}</p>
	</article>
</section>

<style>
	section {
		padding: 0 1em var(--section-padding-y);
		min-height: 70vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: start;
		color: var(--card-color-green);
	}

	h2 {
		font-family: var(--sub-header-font);
		font-size: clamp(2em, 5vw, 8em);
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		line-height: 1;
		padding-bottom: 0.7em;
	}

	h2 span:nth-of-type(2) {
		color: var(--main-color-brown);
	}

	p {
		padding: 0.3em;
        max-width: 65ch;
		line-height: var(--line-height-paragraph);
	}

	p:nth-of-type(1) {
		margin-bottom: 1em;
	}

	/* MEDIA QUERY MOBILE = 430px */
	@media (min-width: 26.8rem) {
		h2 {
			flex-direction: row;
		}
	}

	/* MEDIA QUERY TABLET S = 686px */
	@media (min-width: 42.125rem) {
		h2 span:nth-of-type(1) {
			margin-right: 0.2em;
		}
	}

	/* MEDIA QUERY TABLET M = 768px */
	@media (min-width: 48rem) {
		section {
			padding: 0 var(--section-padding-x) var(--section-padding-y);
		}

		h2 {
			padding-bottom: 0.7em;
		}
		
		p {
			max-width: 70ch;
		}
	}

	/* MEDIA QUERY LAPTOP = 1100px */
	@media (min-width: 68.75rem) {
		section {
			padding: 0 9em var(--section-padding-y);
		}

		p {
			margin-bottom: inherit;
		}
	}

	/* MEDIA QUERY TABLET L = 1250px */
	@media (min-width: 78.1rem) {
		section {
			height: 70vh;
			margin-left: -1.6rem;
		}

		article,
		p {
			max-width: 43em;
		}
	}

	/* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
		section {
			padding: 0 15em var(--section-padding-y);
		}

		article,
		p {
			font-size: 1.1em;
			max-width: 43em;
		}
	}
</style>
