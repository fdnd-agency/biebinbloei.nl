<script>
	import { fade } from 'svelte/transition';
	import Cloud3D from './cloud3d.svelte';
	import { onMount } from 'svelte';

	let weather = null;
	let loading = true;
	let error = null;
	let cloud = 65;
	let weatherClass = 'default';
	let dayNightClass = 'day';

	const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
	const API_URL = 'https://api.weatherapi.com/v1/current.json';
	const FALLBACK_CITY = 'Amsterdam';

	function getWeatherClass(condition) {
		const text = condition.toLowerCase();
		if (text.includes('thunder')) return 'thunderstorm';
		if (text.includes('partly') || text.includes('cloudy')) return 'partly-cloudy';
		if (text.includes('sunny')) return 'sunny';
		if (text.includes('clear')) return 'sunny';
		if (text.includes('fog') || text.includes('mist') || text.includes('overcast')) return 'fog';
		if (text.includes('rain')) return 'rain';
		return 'default';
	}

	async function fetchWeather(query) {
		try {
			const res = await fetch(`${API_URL}?key=${API_KEY}&q=${query}&aqi=yes`);
			const data = await res.json();
			weather = data;
			cloud = data.current.cloud;
			weatherClass = getWeatherClass(weather.current.condition.text);
			dayNightClass = weather.current.is_day ? 'day' : 'night';
		} catch (err) {
			error = 'Failed to fetch weather data';
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
					fetchWeather(coords);
				},
				() => fetchWeather(FALLBACK_CITY) // fallback if permission denied
			);
		} else {
			fetchWeather(FALLBACK_CITY); // fallback if geolocation unsupported
		}
	});
</script>

{#if loading}
	<progress>Loading...</progress>
{:else if error}
	<aside role="alert">
		<p>{error}</p>
	</aside>
{:else}
	<main
		transition:fade|local={{ duration: 600 }}
		class={`weather-container ${weatherClass} ${dayNightClass}`}
		style="--cloud: {cloud}%;"
	>
		{#if weatherClass === 'partly-cloudy' || weatherClass === 'default'}
			<section class="cloud-wrapper" aria-label="Clouds animation">
				<Cloud3D puffCount={20} noAnimation={false} speed={90} style="top: 5%; opacity: 0.5;" />
				<Cloud3D puffCount={30} noAnimation={false} speed={50} style="top: 10%; opacity: 0.6;" />
				<Cloud3D puffCount={40} noAnimation={false} speed={40} style="top: 20%; opacity: 0.7;" />
				<Cloud3D puffCount={20} noAnimation={false} speed={30} style="top: 35%; opacity: 0.5;" />
				<Cloud3D puffCount={30} noAnimation={false} speed={20} style="top: 45%; opacity: 0.7;" />
				<Cloud3D puffCount={40} noAnimation={false} speed={10} style="top: 55%; opacity: 0.9;" />
			</section>
		{/if}

		{#if weatherClass === 'sunny'}
			<figure class="sun" aria-label="Sunny weather">
				<div class="rays"></div>
			</figure>
		{/if}

		{#if weatherClass === 'thunderstorm'}
			<section class="stormcloud-wrapper" aria-label="Thunderstorm visuals">
				<Cloud3D puffCount={45} storm={true} noAnimation={false} top="0" />
				<Cloud3D puffCount={55} storm={true} noAnimation={false} top="0" />
				<Cloud3D puffCount={65} storm={true} noAnimation={false} top="0" />

				<div class="lightning flashit"></div>
				<section class="rain">
					{#each Array(100) as _, i}
						<div
							class="raindrop"
							style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"
						></div>
					{/each}
				</section>
			</section>
		{/if}

		{#if weatherClass === 'fog'}
			<section class="fogcloud-wrapper" aria-label="Low visibility weather">
				<Cloud3D puffCount={25} speed={20} style="bottom: 0; opacity: 0.3;" />
				<Cloud3D puffCount={35} speed={15} style="bottom: 10%; opacity: 0.4;" />
				<Cloud3D puffCount={40} speed={10} style="bottom: 20%; opacity: 0.5;" />
			</section>
		{/if}

		{#if weatherClass === 'rain'}
			<section class="rain" aria-label="Rainy weather">
				{#each Array(100) as _, i}
					<div
						class="raindrop"
						style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"
					></div>
				{/each}
			</section>
		{/if}

		{#if weatherClass === 'hail'}
			<section class="hail" aria-label="Hailing weather">
				{#each Array(50) as _, i}
					<div
						class="hailstone"
						style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"
					></div>
				{/each}
			</section>
		{/if}

		{#if weatherClass === 'snow'}
			<section class="snow" aria-label="Snowy weather">
				{#each Array(100) as _, i}
					<div
						class="snowflake"
						style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 10}s;"
					></div>
				{/each}
			</section>
		{/if}
		</main>
{/if}

<style>
	.weather-header {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		backdrop-filter: blur(4px);
		height: 100%;
		width: 100%;
		transition: background-image 0.8s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		position: relative;
		overflow: hidden;
	}

	.day {
		background: linear-gradient(to top, rgba(255, 255, 224, 0.15), rgba(255, 255, 255, 0));
	}

	.night {
		background: linear-gradient(to top, rgba(10, 10, 30, 0.3), rgba(0, 0, 0, 0));
		color: #ddd;
	}

	/* ☀️ Clear Weather animation */
	.clear {
		animation: clouds-clear 5s ease-in forwards;
	}

	@keyframes clouds-clear {
		0% {
			--cloud: 65%;
		}
		100% {
			--cloud: 15%;
		}
	}

	.sunny {
		background: linear-gradient(to top, #87ceeb, #fffacd);
		animation: sunnyGlow 8s infinite alternate;
	}

	.sun {
		position: absolute;
		top: 60px;
		left: 60px;
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, #ffd700 60%, #ffa500 100%);
		border-radius: 50%;
		box-shadow: 0 0 20px 10px rgba(255, 223, 0, 0.6);
		animation: rotateSun 12s linear infinite;
		z-index: 2;
	}

	.rays {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 800px;
		height: 800px;
		margin-left: -400px;
		margin-top: -400px;
		border-radius: 50%;
		background: repeating-conic-gradient(rgba(255, 215, 0, 0.15) 0deg 6deg, transparent 6deg 12deg);
		animation:
			rotateRays 20s linear infinite,
			rayPulse 4s ease-in-out infinite;
		z-index: 1;
		pointer-events: none;
	}

	@keyframes rotateRays {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes rayPulse {
		0%,
		100% {
			opacity: 0.3;
		}
		50% {
			opacity: 0.5;
		}
	}

	@keyframes rotateSun {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes sunnyGlow {
		0% {
			background-color: #fffacd;
		}
		100% {
			background-color: #ffffe0;
		}
	}

	/* ⛈️ Thunderstorm animation */
	.thunderstorm {
		--cloud: 80%;
		animation: storm-flash 1s step-start infinite;
	}

	@keyframes move-clouds {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.stormcloud-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 10;
		overflow: hidden;
	}

	/* ⚡ Lightning Flash animation */
	.lightning {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: white;
		filter: brightness(3) blur(2px);
		mix-blend-mode: screen;
		opacity: 0;
		z-index: -1;
	}

	.flashit {
		animation: flash 6s ease-out infinite;
		animation-delay: 2s;
	}

	@keyframes flash {
		0%,
		90% {
			opacity: 0;
		}
		91% {
			opacity: 0.2;
		}
		92% {
			opacity: 0;
		}
		93% {
			opacity: 0.15;
		}
		94% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	/* 🌫️ Fog Effect */
	.fogcloud-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		pointer-events: none;
		z-index: 5;
	}

	@keyframes fog-move {
		0% {
			left: -100%;
		}
		100% {
			left: 100%;
		}
	}

	/* Partly Cloudy Animation */
	.partly-cloudy {
		animation: cloud-drift 10s ease-in-out infinite alternate;
	}

	@keyframes cloud-drift {
		0% {
			--cloud: 55%;
		}
		100% {
			--cloud: 65%;
		}
	}

	.cloud-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		animation: moveCloud 60s linear infinite;
		z-index: 10;
	}

	@keyframes moveCloud {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(120vw);
		}
	}

	.rain {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index: 5;
	}

	.raindrop {
		position: absolute;
		top: -20px;
		width: 2px;
		height: 20px;
		background: rgba(255, 255, 255, 0.6);
		animation: drop 1s linear infinite;
	}

	@keyframes drop {
		0% {
			transform: translateY(0);
			opacity: 0.8;
		}
		100% {
			transform: translateY(100vh);
			opacity: 0;
		}
	}

	.snow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	.snowflake {
		position: absolute;
		top: -10px;
		background-color: white;
		border-radius: 50%;
		opacity: 0.8;
		animation: snowfall 10s linear infinite;
	}

	@keyframes snowfall {
		0% {
			transform: translateY(-10px) translateX(0);
		}
		100% {
			transform: translateY(100vh) translateX(10vw);
			opacity: 0;
		}
	}

	.snowflake:nth-child(odd) {
		width: 10px;
		height: 10px;
		animation-duration: 12s;
	}

	.snowflake:nth-child(even) {
		width: 15px;
		height: 15px;
		animation-duration: 14s;
	}

	.hail {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
		overflow: hidden;
	}

	.hailstone {
		position: absolute;
		top: -20px;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 50%;
		animation: hailfall 5s linear infinite;
	}

	@keyframes hailfall {
		0% {
			transform: translateY(-20px) translateX(0);
		}
		100% {
			transform: translateY(100vh) translateX(5vw);
			opacity: 0;
		}
	}

	.hailstone:nth-child(odd) {
		width: 15px;
		height: 15px;
		animation-duration: 4s;
	}

	.hailstone:nth-child(even) {
		width: 25px;
		height: 25px;
		animation-duration: 6s;
	}

	.default {
		--cloud: 50%;
	}

	.weather-info {
		z-index: 2;
	}

	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.001s !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.001s !important;
			scroll-behavior: auto !important;
		}

		.rays,
		.sun,
		.cloud-wrapper,
		.fog-layer,
		.fog-layer-2,
		.raindrop,
		.snowflake,
		.hailstone,
		.lightning {
			animation: none !important;
		}
	}

	@media (min-width: 48rem) and (max-width: 64rem) and (orientation: landscape) {
		.sun {
			width: 15vw;
			height: 15vw;
			top: 0vh;
			left: 1vh;
		}

		.rays {
			width: 50vw;
			height: 50vw;
			margin-left: -25vw;
			margin-top: -25vw;
		}
	}

	@media (max-width: 48rem) {
		.weather-container {
			padding: 1rem;
		}

		.sun {
			width: 150px;
			height: 150px;
			top: 20px;
			left: 20px;
		}

		.rays {
			width: 300px;
			height: 300px;
			margin-left: -150px;
			margin-top: -150px;
		}

		.cloud-wrapper {
			height: 50vh;
		}

		.cloud {
			height: 40%;
			background-size: 150% auto;
		}

		.fog-layer,
		.fog-layer-2 {
			height: 50%;
			background-size: 150% auto;
		}

		.raindrop,
		.snowflake,
		.hailstone {
			transform: scale(0.6);
		}

		.snowflake:nth-child(odd) {
			width: 6px;
			height: 6px;
		}

		.snowflake:nth-child(even) {
			width: 8px;
			height: 8px;
		}

		.hailstone:nth-child(odd) {
			width: 10px;
			height: 10px;
		}

		.hailstone:nth-child(even) {
			width: 15px;
			height: 15px;
		}

		.weather-header {
			font-size: 1rem;
			text-align: center;
		}

		.lightning {
			display: none; 
		}
	}

	@media (max-width: 480px) {
		.weather-container {
			padding: 0.5rem;
		}

		.sun {
			width: 100px;
			height: 100px;
			top: 10px;
			left: 10px;
		}

		.rays {
			width: 200px;
			height: 200px;
			margin-left: -100px;
			margin-top: -100px;
		}

		.cloud-wrapper {
			height: 10vh;
		}

		.cloud {
			height: 35%;
			background-size: 200% auto;
		}

		.fog-layer,
		.fog-layer-2 {
			height: 40%;
			background-size: 200% auto;
		}

		.raindrop,
		.snowflake,
		.hailstone {
			transform: scale(0.4);
		}

		.snowflake:nth-child(odd) {
			width: 5px;
			height: 5px;
		}

		.snowflake:nth-child(even) {
			width: 6px;
			height: 6px;
		}

		.hailstone:nth-child(odd) {
			width: 8px;
			height: 8px;
		}

		.hailstone:nth-child(even) {
			width: 12px;
			height: 12px;
		}

		.weather-header {
			font-size: 0.9rem;
			padding: 0.5rem;
		}

		.lightning {
			display: none;
		}

		.weather-info {
			font-size: 0.85rem;
		}

		.cloud-layer,
		.cloud-wrapper {
			animation-duration: 120s;
		}
	}
</style>
