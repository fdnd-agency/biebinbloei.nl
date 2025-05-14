<script>
	let { fillColor } = $props();
</script>

<svg class={fillColor} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 47">
	<path d="M40.492 18.788 8.942 1.034C4.944-1.218 0 1.673 0 6.262v34.704c0 4.537 4.842 7.433 8.84 5.285l31.549-16.948c4.167-2.239 4.225-8.195.103-10.515Z"
	fill={fillColor} />
</svg>

<style>
	svg {
		--svg-fill: var(--main-color-beige);
        fill: var(--svg-fill);
		width: 16px;
		height: 18px;
	}
	.svg-beige{
        --svg-fill: var(--main-color-beige);
    }

	.svg-beige:hover, .svg-green:hover{
        --svg-fill: var(--main-color-orange);
    }
	.svg-green{
        --svg-fill: var(--main-color-green);
    }

</style>