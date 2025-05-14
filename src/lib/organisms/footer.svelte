<script>
	import { LeafRight, LeafLeft } from '$lib/index.js';
	let { data } = $props();
</script>

<footer>
	<section class="background">
		<div class="right-svg">
			<LeafRight />
		</div>
		<div class="left-svg">
			<LeafLeft />
		</div>
	</section>

	<section class="information">
		<ul>
			<li class="title">{data.footers[0].titleAdres}</li>
			<li>{data.footers[0].location}</li>
			<li>
				<a
					target="_blank"
					href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.footers[0].adres)}`}
				>
					{data.footers[0].adres}
				</a>
			</li>
			<li>{data.footers[0].postalCode}</li>
		</ul>
		<ul>
			<li class="title">{data.footers[0].titleContact}</li>
			<li><a href={`mailto:${data.footers[0].email}`}>{data.footers[0].email}</a></li>
			<li>
				<a href={`tel:${data.footers[0].number.replace(/\s+/g, '')}`}>{data.footers[0].number}</a>
			</li>
		</ul>
		<ul>
			<li class="title">{data.footers[0].titleCollaborate}</li>
			<li>{data.footers[0].collaborateParagraph}</li>
		</ul>

		<ul>
  <li class="title">Licentie</li>
  <li>
    <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
      <a property="dct:title" rel="cc:attributionURL" href="http://www.biebinbloei.nl/">Bieb in Bloei</a> by
      <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.buurtcampus.amsterdam/oost">Buurtcampus Oost</a>
      is licensed under
      <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">
        CC BY-NC 4.0
        <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="CC" />
        <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="BY" />
        <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="NC" />
      </a>
    </p>
  </li>
</ul>
	</section>

		

</footer>

<style>
	footer {
		position: relative;
		width: 100%;
		min-height: 70vh;
		background-color: var(--main-color-beige);
		overflow: hidden;
		padding: var(--section-padding-y) 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	footer a {
		text-decoration: none;
		color: inherit;
	}

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.right-svg,
	.left-svg {
		position: absolute;
		z-index: 0;
		opacity: 0.3;
		transition: 0.6s;
	}

	.right-svg {
		background-image: url(/assets/right-footer-leaf.svg);
		top: 0;
		right: -20%;
	}

	.left-svg {
		background-image: url(/assets/left-footer-leaf.svg);
		top: 20%;
		left: -20%;
	}

	.left-svg,
	.right-svg {
		transition: transform 0.3s ease-in-out;
	}

	.information {
		display: flex;
		align-items: top;
		width: 90%;
		justify-content: space-evenly;
		color: var(--main-color-green);
		z-index: 1;
	}

	ul {
		width: 25%;
		margin: 1em;
	}

	li {
		list-style-type: none;
	}

	ul p {
  margin: 0;
  line-height: 1.4;
}

ul img {
  height: 1em;
  vertical-align: text-bottom;
  margin-left: 3px;
}

	.title {
		font-size: 2em;
		margin-bottom: 1rem;
		font-weight: 700;
	}

	.background:hover .left-svg {
		transform: translateY(20%) translateX(-20%) rotate(-20deg);
	}

	.background:hover .right-svg {
		transform: translateY(-5%) translateX(20%) rotate(20deg);
	}

	.background .left-svg,
	.background .right-svg {
		transition-delay: 0.1s;
	}

	@media (prefers-reduced-motion: reduce) {
		.left-svg,
		.right-svg {
			transition: none;
			transform: none;
		}
		.background:hover .left-svg,
		.background:hover .right-svg {
			transform: unset;
		}
	}

	/* MEDIA QUERY MOBILE = 1400px */
	@media (min-width: 87.5em) {
		.information {
			width: 50%;
		}
	}

	/* MEDIA QUERY MOBILE = 1000px */
	@media (min-width: 62.5em) {
		.information {
			width: 70%;
		}
	}

	/* MEDIA QUERY MOBILE = 700px */
	@media (max-width: 43.75em) {
		footer {
			height: max-content;
			padding: var(--section-padding-y) 1em;
			justify-content: unset;
		}

		.information {
			flex-direction: column;
			gap: 1em;
			width: 80%;
		}

		ul {
			width: 100%;
			z-index: 2;
		}

		.title {
			font-size: 2em;
			margin-bottom: 0rem;
			font-weight: 700;
		}

		.right-svg {
			display: none;
		}
	}
</style>
