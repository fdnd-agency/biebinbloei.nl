<script>
	import { fade } from 'svelte/transition';

	import Cloud3D from './cloud3d.svelte';
	import Lightning3D from './lightning3d.svelte';
	import { onMount } from 'svelte';

	let weather = null;
	let loading = true;
	let error = null;
	let cloud = 65;
	let weatherClass = 'default';

	const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
	const API_URL = 'https://api.weatherapi.com/v1/current.json';
	const CITY = 'Clarksville, US';	

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

	onMount(async () => {
		try {
			const res = await fetch(`${API_URL}?key=${API_KEY}&q=${CITY}&aqi=yes`);
			const data = await res.json();
			weather = data;
			cloud = data.current.cloud;
			weatherClass = getWeatherClass(weather.current.condition.text);
		} catch (err) {
			error = 'Failed to fetch weather data';
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>{error}</p>
{:else}
	<div transition:fade|local={{ duration: 600 }} class={`weather-container ${weatherClass}`} style="--cloud: {cloud}%;">
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="position: absolute; height: 0;">
			<defs>
				<filter id="blurFilter">
					<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 19 -9"
						result="goo"
					/>
					<feComposite in="SourceGraphic" in2="goo" operator="atop" />
				</filter>
			</defs>
		</svg>

{#if weatherClass === 'partly-cloudy' || weatherClass === 'default'}
	<div class="cloud-wrapper">
		<Cloud3D puffCount={20} noAnimation={false} speed={90} style="top: 5%; opacity: 0.5;" />
		<Cloud3D puffCount={30} noAnimation={false} speed={50} style="top: 10%; opacity: 0.6;" />
		<Cloud3D puffCount={40} noAnimation={false} speed={40} style="top: 20%; opacity: 0.7;" />
		<Cloud3D puffCount={20} noAnimation={false} speed={30} style="top: 35%; opacity: 0.5;" />
		<Cloud3D puffCount={30} noAnimation={false} speed={20} style="top: 45%; opacity: 0.7;" />
		<Cloud3D puffCount={40} noAnimation={false} speed={10} style="top: 55%; opacity: 0.9;" />
	</div>
	
{/if}

		{#if weatherClass === 'sunny'}
			<div class="sun">
				<div class="rays"></div>
			</div>
		{/if}

		{#if weatherClass === 'thunderstorm'}
			<div class="stormcloud-wrapper">
				<Cloud3D puffCount={45} storm={true} noAnimation={false} top="0" />
				<Cloud3D puffCount={55} storm={true} noAnimation={false} top="0" />
				<Cloud3D puffCount={65} storm={true} noAnimation={false} top="0" />
				
				<div class="lightning flashit"></div>
				<div class="rain">
					{#each Array(100) as _, i}
						<div class="raindrop" style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"></div>
					{/each}
				</div>
			</div>
		{/if}

		{#if weatherClass === 'fog'}
			<div class="fog-layer"></div>
			<div class="fog-layer fog-layer-2"></div>
		{/if}

		{#if weatherClass === 'rain'}
			<div class="rain">
				{#each Array(100) as _, i}
					<div
						class="raindrop"
						style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"
					></div>
				{/each}
			</div>
		{/if}

		{#if weatherClass === 'hail'}
			<div class="hail">
				{#each Array(50) as _, i}
					<div
						class="hailstone"
						style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"
					></div>
				{/each}
			</div>
		{/if}

		{#if weatherClass === 'snow'}
			<div class="snow">
				{#each Array(100) as _, i}
					<div
						class="snowflake"
						style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 10}s;"
					></div>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	.weather-header {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
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

	/* ☀️ Clear Weather */
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

	/* ⛈️ Thunderstorm */
	.thunderstorm {
		--cloud: 80%;
		animation: storm-flash 1s step-start infinite;
	}

.cloud-layer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	overflow: hidden;
	z-index: -15;
	pointer-events: none;
}

.cloud-line-1 {
	animation-delay: 0s;
}

.cloud-line-2 {
	animation-delay: 6s; 
}

	.cloud-layer {
		animation: move-clouds 90s linear infinite;
		z-index: 0;
		opacity: 0.75;
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

	.stormcloud-1 {
		top: -200px;
		left: -100px;
		animation-delay: 0s;
		background-image: url(./stormcloud-2.png);
		background-position: top center;
		background-size: 100% 100%;
		opacity: 1.85;
	}

	.stormcloud-2 {
		top: 200px;
		left: -100px;
		animation-delay: 0s;
		background-image: url(./stormcloud-3.png);
		background-position: top center;
		background-size: 100% 100%;
		opacity: 1.85;
	}

	/* ⚡ Lightning Flash */
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
	.fog-layer {
		position: absolute;
		bottom: 0;
		left: -100%;
		width: 200%;
		height: 70%;
		background-image: url(./small-cloud-3.png);
		animation: fog-move 20s linear infinite;
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: top;
		object-fit: cover;
		z-index: 1;
		opacity: 0.45;
	}

	.fog-layer-2 {
		animation-delay: 10s;
		background-image: url(./small-cloud-1.png);
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: top;
		object-fit: cover;
		opacity: 0.35;
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

	.cloud {
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: top;
		object-fit: cover;
		width: 100%;
		height: 50%;
	}

	.cloud-1 {
		top: 0;
		left: -100px;
		animation-delay: 0s;
		background-image: url(./small-cloud-1.png);
		background-position: top center;
		background-size: 100% 100%;
		opacity: 0.85;
	}

	.cloud-2 {
		top: -100px;
		left: -150px;
		animation-delay: 10s;
		background-image: url(./small-cloud-2.png);
		background-position: top center;
		background-size: 100% 100%;
		opacity: 0.75;
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
		z-index: -55;
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

	/* Default fallback */
	.default {
		--cloud: 50%;
	}

	.weather-info {
		z-index: 2;
	}

	@media (max-width: 768px) {
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
		display: none; /* Optional: turn off lightning for performance */
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
		height: 40vh;
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

	/* Optional: slow down animations on smaller devices */
	.cloud-layer,
	.cloud-wrapper {
		animation-duration: 120s;
	}
}
</style>
