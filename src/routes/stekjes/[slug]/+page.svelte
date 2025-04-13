<script>
	export let data;
	import { HarryWeather, Features, Button } from '$lib/index.js';

	let mood;
	let environment;
</script>

<header class="stekjes_detail">
	<div class="overlay"></div>
	<img
		src={data.stekje.fotos[0].url}
		alt=""
		width={data.stekje.fotos[0]?.width || 'auto'}
		height={data.stekje.fotos[0]?.height || 'auto'}
		class="header"
		loading="lazy"
	/>
</header>

<HarryWeather textTemp={data.stekje.absoluteTemperatuur} name={data.stekje.naam} />

<section class="container">

	<div class="button-overzichtspagina-container">
		<Button
			href="/stekjes"
			buttonText="Stekjes overzichtspagina"
			buttonClass="btn-brown"
			svgFill="svg-beige"
		/>
	</div>

	<div class="vorige-volgende-container">
		{#if data.vorige}
			<Button
				href="/stekjes/{data.vorige}"
				buttonText="Vorige stekje"
				buttonClass="btn-brown"
				svgFill="svg-beige"
			/>
		{/if}

		{#if data.volgende}
			<Button
				href="/stekjes/{data.volgende}"
				buttonText="Volgende stekje"
				buttonClass="btn-brown"
				svgFill="svg-beige"
			/>
		{/if}
	</div>

	<div class="stekje-container">
		<article>
			<h1>{data.stekje.naam}</h1>
			<p>{data.stekje.beschrijving}</p>
			<img src={data.stekje.fotos[0].url} alt={data.stekje.naam} width="15em" />
		</article>

		<Features {data} type="stekje" />
	</div>
</section>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 40vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
	}

	.header {
		height: 40vh;
		width: 100%;
		object-fit: cover;
		margin: -1em 0;
	}

	section {
		position: relative;
		width: 100%;
		background-color: var(--main-color-green);
		margin: 0;
		overflow-x: hidden;
	}

	.button-overzichtspagina-container {
		width: 15em;
		margin-top: 3em;
		margin-left: 1em;
		margin-bottom: 1em;
	}

	.vorige-volgende-container{
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 0 0.5em;
	}

	h1 {
		color: var(--main-color-brown);
		font-family: var(--header-font);
		font-size: 2em;
	}

	h1::before {
		content: url('/assets/orangeArrow.svg');
		margin-right: 0.625em;
	}

	.container {
		padding: 2em 1em;
	}

	.stekjes_detail {
		position: relative;
		width: 100%;
		background-color: var(--main-color-green);
		margin: 0;
		overflow: hidden;
	}

	.stekje-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(calc(22em - 2 * 1.5em), 1fr));
		grid-gap: 2rem;
		width: 100%;
		background-color: #f9e9c2;
		border-radius: var(--border-bigCard);
		padding: 1.5em 1em;
	}

	article {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	article img {
		width: 100%;
		height: 15rem;
		object-fit: cover;
		border-radius: var(--border-card);
	}

	p {
		line-height: var(--line-height-paragraph);
	}

	/* temporary fix */
  @media (max-width: 375px) {
		.stekje-container {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 32em) {
		.container {
			padding: 2em;
		}

		.stekje-container {
			padding: 2em;
		}

		article img {
			height: 20rem;
		}
	}

	/* desktop */

	@media (min-width: 64em) {
		article img {
			width: 15em;
			height: auto;
		}

		.button-overzichtspagina-container {
			margin-top: -1em;
			margin-bottom: 3em;
			position: relative;
	}

	@media (min-width: 100em) {
		article{
			font-size: 19px;

		}
	}
</style>
