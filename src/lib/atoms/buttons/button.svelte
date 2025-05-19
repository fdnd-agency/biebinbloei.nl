<script>
	let {
		href,
		buttonText,
		buttonClass,
		svgFill
	} = $props();
</script>

<div class="button-wrapper">
	<img src="/assets/blije Harry.svg" alt="" />

	<a {href} class={buttonClass}>
		{buttonText}
		<span>
			<svg class={svgFill} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 47">
				<path
					d="M40.492 18.788 8.942 1.034C4.944-1.218 0 1.673 0 6.262v34.704c0 4.537 4.842 7.433 8.84 5.285l31.549-16.948c4.167-2.239 4.225-8.195.103-10.515Z"
					fill={svgFill}
				/>
			</svg>
		</span>
	</a>
</div>

<style>
	/* button style */
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
	}

	a:focus-visible {
		background: var(--main-color-orange);
		color: var(--text-color-black);
	}

	.button-wrapper {
		display: flex;
		flex-direction: column;
		/* position: relative; */
		align-items: center;
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

	.btn-beige-agenda {
		--color-accent: var(--main-color-beige);
		--color-text: var(--card-color-green);
	}

	/* button hover */
	/* a:hover {
		cursor: pointer;
		transform: scale(1.05);
		--color-accent: var(--text-color-white);
		--color-text: var(--main-color-orange);
	}
	a:hover .svg-beige,
	a:hover .svg-green {
		--svg-fill: var(--main-color-orange);
	} */

	a:hover {
		cursor: pointer;
		transform: scale(0.9);
		background-color: #270e01;
	}
	/* svg style */
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 0 0.05em 0.7em;
	}
	svg {
		--svg-fill: var(--main-color-beige);
		fill: var(--svg-fill);
		width: 16px;
		height: 18px;
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
