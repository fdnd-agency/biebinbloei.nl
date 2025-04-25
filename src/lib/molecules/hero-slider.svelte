<script>
	export let data;
	import { onDestroy, onMount } from 'svelte';
	import { HarryWeather } from '$lib/index.js';

	import { weatherEffects } from '$lib/weatherMap.js';

	import FogAnimation from './../../components/animations/fog-animation.svelte';
	import RainAnimation from './../../components/animations/rain-animation.svelte';
	import SunAnimation from './../../components/animations/sun-animation.svelte';
	import CloudsAnimation from './../../components/animations/cloud-animation.svelte';
	import SnowAnimation from './../../components/animations/snow-animation.svelte';
	import StormAnimation from './../../components/animations/storm-animation.svelte';


	let animationType = '';

const animations = {
  fog: FogAnimation,
  rain: RainAnimation,
  clear: SunAnimation,
  clouds: CloudsAnimation,
  snow: SnowAnimation,
  storm: StormAnimation,
};

async function getWeather() {
  const res = await fetch('https://api.weatherapi.com/v1/current.json?key=35d06ad897c84f6e8c7112446251504&q=Amsterdam&aqi=yes');
  const data = await res.json();

  const weather = data.weather[0].main.toLowerCase();
  animationType = weatherEffects[weather] || '';
}

onMount(() => {
  getWeather();
});

	let intervalId;

	onMount(() => {
		const carrouselContainer = document.querySelector('.hero-slider');
		const carrousel = document.querySelector('.hero-img-list');

		if (!carrousel || !carrouselContainer) {
			console.error('Carrousel elements not found.');
			return;
		}

		const interval = 8000;

		intervalId = setInterval(() => {
			const currentScroll = carrousel.scrollLeft;
			const itemWidth = carrouselContainer.clientWidth;
			const totalWidth = carrousel.scrollWidth;

			const nextScroll = (currentScroll + itemWidth) % totalWidth;

			carrousel.scrollTo({
				left: nextScroll,
				behavior: 'smooth'
			});
		}, interval);
	});

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<section>
	<section class="hero-slider">
		<div class="overlay">
			<div class="header-wrapper">
				<div class="animation-layer">
				  {#if animationType}
					<svelte:component this={animations[animationType]} />
				  {/if}
				</div>

		</div>

		<header>
			<h1>{data.headerTexts[0].heading1}</h1>
			<h2>{data.headerTexts[0].description}</h2>
			<HarryWeather />
		</header>

		<ul class="hero-img-list">
			{#each data.herosSlider as hero}
				<li>
					<picture>
						<img
							width="1280"
							height="840"
							src={hero.sliderPicture.url}
							alt={hero.sliderPictureAltText}
						/>
					</picture>
				</li>
			{/each}
		</ul>
	</section>
</section>

<style>
	.hero-slider {
		background-color: var(--main-color-green);
		width: 100%;
		height: 85vh;
		
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 85vh;
		background: var(--image-gradient);
		
	}
	header {
		position: absolute;
		height: 85vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
		padding: 0 1em;
		overflow: hidden;
	}

	h1 {
		font-family: var(--header-font);
		font-size: clamp(1em, 10vw, 5em);
		color: var(--text-color-white);
		font-weight: 900;
		line-height: 1.1em;
		width: 60%;
	}

	h2 {
		font-size: 1.2rem;
		color: var(--text-color-white);
		font-weight: 900;
		line-height: 1.1em;
		padding: 0.5em 0;
		margin: 0;
	}
	.hero-img-list img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
	.hero-slider ul {
		display: flex;
		overflow-x: auto;
		height: 85vh;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
	}
	.hero-slider ul::-webkit-scrollbar {
		display: none;
	}
	.hero-slider li {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 100%;
		height: 75vh;
		scroll-snap-align: start;
	}

	/* MEDIA QUERY MOBILE = 400px */
	@media (min-width: 25rem) {
		header {
			padding: 0 2em;
		}
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		header {
			width: 100%;
			align-items: center;
		}
		h1 {
			max-width: 9em;
			font-size: clamp(5em, 12vw, 6em);
		}
		h1,
		h2 {
			width: 100%;
			text-align: center;
		}

		h2{
			font-size: 2rem;
		}
	}

	/* MEDIA QUERY DESKTOP = 1700px */
	@media (min-width: 106.25rem) {
		h1 {
			font-size: clamp(5em, 12vw, 7em);
		}

		h2{
			font-size: 2rem;
		}
	}

	@media (min-width: 100rem) {

		h2{
			font-size: 4em;
		}
	}

</style>
