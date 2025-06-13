<script>
	let {
		href,
		buttonText,
		buttonClass,
		svgFill,
		layout = "absolute"
	} = $props();
</script>

<div class="button-wrapper {layout}">
	<img src="/assets/blije Harry.svg" alt="" />

	<a {href} class={buttonClass}>
		{buttonText}
		<span>
			<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.154 11.4385L11.554 5.83848L12.979 4.43848L20.979 12.4385L12.979 20.4385L11.554 19.0385L17.154 13.4385L4.979 13.4385L4.979 11.4385L17.154 11.4385Z" fill="currentColor"/>
			</svg>
		</span>
	</a>
</div>

<style>
	a {
		background-color: var(--color-accent);
		--color-accent: var(--accent, --main-color-brown);
		color: var(--color-text);
		--color-text: var(--text, --main-color-beige);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1em;
		height: 3em;
		border-radius: 0 1em 1em 1em;
		font-size: 1.125em;
		text-decoration: none;
		transition: ease-in 0.1s;
		z-index: 2;
		margin-top: 1em;
		z-index: 100;

	}

	.button-wrapper a:focus-visible {
		background: var(--main-color-orange);
		color: var(--text-color-black);
	}

	.button-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.button-wrapper.absolute {
		position: absolute;
		right: 1em;
		bottom: 1em;
	}

	img {
		position: absolute;
		top: -35px;
		left: 50%;
		width: 3rem;
		height: 3rem;
		transform: translateX(-50%) translateY(8%);
		opacity: 0;
		z-index: 1;
		transition: all 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
	}

	/* Animatie bij focus via Tab */
	@media (prefers-reduced-motion: no-preference) {
		.button-wrapper:has(:global(a:focus-visible)) img {
			opacity: 1;
			transform: translateX(-50%) translateY(-30%);
		}
	}

	/* button variants */
	.btn-green {
		--color-accent: var(--main-color-green);
		--color-text: var(--main-color-beige);
	}
	.btn-brown {
		--color-accent: var(--main-color-brown);
		--color-text: var(--main-color-beige);
	}
	.btn-beige {
		--color-accent: var(--main-color-beige);
		--color-text: var(--card-color-green);
	}

	.btn-beige-brown {
		--color-accent: var(--main-color-beige); 
		--color-text: var(--main-color-brown);
		}

	.btn-beige-agenda {
		--color-accent: var(--main-color-beige);
		--color-text: var(--card-color-green);
	}

	a:hover {
		cursor: pointer;
		transform: scale(0.9);
	}
	
	/* svg style */
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 0 0 0.5em;
	}
	svg {
		--svg-fill: var(--main-color-beige);
		fill: var(--svg-fill);
		width: 24px;
		height: 24px;
	}

	.svg-beige {
		--svg-fill: var(--main-color-beige);
	}
	.svg-green {
		--svg-fill: var(--main-color-green);
	}
	.svg-brown {
		--svg-fill: var(--main-color-brown);
	}

	@container slidecards (min-width: 64rem) {
		a {
			width: 14em;
		}
	}

	@container slidecards (min-width: 100rem) {
		a {
			width: 14em;
		}
	}
</style>
