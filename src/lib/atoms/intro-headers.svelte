<script>
	let { heroInfo } = $props();
</script>

<section>
	<h2>ONZE <br /> TITEL</h2>
	<p>{heroInfo.description}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin: 5em auto 0 auto;
		max-width: 600px;
		padding: 1em;
		background-color: var(--main-color-beige);
		color: var(--main-color-green);
		font-size: 1em;
	} 

	h2 {
		margin-top: -1em; /* tijdelijk, nog kijken naar andere opties? */
	}

	/* section::after {
		opacity: 0.5;
		position: absolute;
		transform: rotate(-45deg);
		content: url(/assets/leaf-orange.svg);
	} */

	/* Tablet - vanaf 48rem */
	@media (min-width: 48rem) {
		section {
			align-items: center;
			width: 81vw;
			padding: 2em 2em;
			border-radius: var(--border-card); 
		}

		section::after {
			width: 9rem;
			top: 2.5em;
			right: -4rem;
		}

		section::before {
			display: none;
		}

		p {
			max-width: 65ch;
		}
	}

	/* Desktop - vanaf 74rem */
	@media (min-width: 74rem) {
		section {
			width: 70vw;
			padding: 1.5em;
		}

		section::after {
			width: 12rem;
			top: -1em;
			right: -4rem;
		}
	}

	/* Groot scherm - vanaf 100rem */
	@media (min-width: 100rem) {
		section {
			width: 71vw;
			line-height: var(--line-height-paragraph-big-screen);
		}

		section::after {
			width: 15rem;
			top: -3em;

		}

		p {
			max-width: 65ch;
			font-size: 1.5em;
		}
	}
</style>


