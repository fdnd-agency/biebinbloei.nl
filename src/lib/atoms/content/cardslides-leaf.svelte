<script>
	let { svgFill } = $props();
</script>

<!-- This file is a color custom property file for the leaf icons on the cards. I have assigned a class
to the leaf icon so that I can give it different colors. In Hygraph, I have assigned the correct
color to the leaf icon for each matching card. -->
<div class={svgFill}></div>

<style>
	/* I have two colors for the leaf icons: orange and green. 
	The geveltuin card only needs the green leaf icon. 
	I have given each card a matching class name for the correct icon. 
	In Hygraph, I have specified which icon belongs to which card. 
	You can see this in Hygraph under content cardslides. */
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

	@container slidecards (min-width: 100rem) {
		.card-stekjes-svgFill::before,
		.card-zaden-svgFill::before,
		.card-gevel-svgFill::before,
		.card-groenebieb-svgFill::before {
			top: -3rem;
			height: 30rem;
			width: 30rem;
		}
	}
</style>
