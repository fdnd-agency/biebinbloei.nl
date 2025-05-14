<script>
	let { heroInfo } = $props();
</script>

<section>
	<p>{heroInfo.description}</p>
</section>

<style>
	section {
		display: flex;
		gap: 0.5em;
		justify-content: center;
		position: relative;
		overflow: hidden;
		margin: -2em auto;
		padding: 1.5em;
		line-height: var(--line-height-paragraph);
		background-color: var(--main-color-beige);
		font-weight: 500;
		font-size: 1em;
	}

	section::before {
		content: url('/assets/Circle-Orange.svg');
		display: inline-flex;
	}

	section::after {
		opacity: 0.5;
		position: absolute;
		transform: rotate(-45deg);
		content: url(/assets/leaf-orange.svg);
	}

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
