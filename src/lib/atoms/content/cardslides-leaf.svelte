<script>
	export let svgFill;
</script>

<div class={svgFill}></div>

<style>
	.card-stekjes-svgFill::before,
	.card-zaden-svgFill::before,
	.card-groenebieb-svgFill::before {
		content: url(/assets/leaf-orange.svg);
	}

	.card-gevel-svgFill::before {
		content: url(/assets/leaf-green.svg);
	}

	.card-stekjes-svgFill::before,
	.card-zaden-svgFill::before,
	.card-gevel-svgFill::before,
	.card-groenebieb-svgFill::before {
		position: absolute;
		top: 0;
		width: 23rem;
		height: 23rem;
		left: -4rem;
		transform: rotate(135deg);
		z-index: -1;
	}

	/* Container Queries */

	/* Ipad air and Ipad pro */
	@container slidecards (min-width: 50rem) and (max-width: 64rem) {
		.card-stekjes-svgFill::before,
		.card-zaden-svgFill::before,
		.card-gevel-svgFill::before,
		.card-groenebieb-svgFill::before {
			top: -3rem;
			height: 20rem;
			left: 11rem;
			transform: rotate(202deg);
		}
	}
</style>
