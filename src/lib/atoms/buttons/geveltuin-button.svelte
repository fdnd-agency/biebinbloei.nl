<script>
	let {
		href,
		buttonText,
		buttonClass,
		svgFill
	} = $props();
</script>

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

<style>
	/* button style */
	a {
		--color-accent: var(--accent, --main-color-green);
		--color-text: var(--text, --main-color-beige);

		background: var(--color-accent);
		color: var(--color-text);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 2em;
		padding: 0.4em 1em;
		text-decoration: none;
		font-size: 1em;
		transition: ease-in 0.1s;
		width: 10em;
	}

	/* button variants */
	.btn-green {
		--color-accent: var(--main-color-green);
		--color-text: var(--main-color-beige);
	}

	/* button hover */
	a:hover {
		cursor: pointer;
		transform: scale(1.05);
		--color-accent: var(--text-color-black);
		--color-text: white;
	}
	a:hover .svg-beige,
	a:hover .svg-green {
		--svg-fill: white;
	}
	/* svg style */
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 0 0.05em 0.7em;
	}
	svg {
		--svg-fill: var(--main-color-white);
		fill: var(--svg-fill);
		width: 16px;
		height: 18px;
	}
	.svg-beige {
		--svg-fill: var(--main-color-beige);
	}

	@media (min-width: 64rem){
		a{
			margin-left: 1.4rem;
		}
	}
</style>
