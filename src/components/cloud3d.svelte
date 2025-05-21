<script>
	export let storm = false;
	export const cloudOpacity = 0.4;
	export let puffCount = 30;
	export let top = '0%';
	export let noAnimation = false;
	export let speed = 60;

	let puffs = Array.from({ length: puffCount }, () => ({
		top: -25 + Math.random() * 20, // 30%–50% vertical
		left: storm ? 10 + Math.random() * 80 : Math.random() * 80, // more centered in storm
		scale: 0.8 + Math.random() * 0.3,
		width: 410 + Math.random() * 120,    // 220–340px
		height: 470 + Math.random() * 150,   // 280–430px
		rotation: Math.random() * 30 - 15,
		opacity: 0.05 + Math.random() * 0.25,
		blur: 3 + Math.random() * 2
	}));
</script>

<div
	class="cloud3d {storm ? 'storm' : ''} {noAnimation ? 'drift' : ''}"
	style="--speed: {speed}s; top: {top};"
>
	{#each puffs as puff}
		<div
			class="puff"
			style="
				top: {puff.top}%;
				left: {puff.left}%;
				width: {puff.width}px;
				height: {puff.height}px;
				transform: scale({puff.scale}) rotate({puff.rotation}deg);
				opacity: {puff.opacity};
				filter: blur({puff.blur}px);
			"
		></div>
	{/each}
</div>

<style>
.cloud3d {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	pointer-events: none;
	animation: driftLine 60s linear infinite;
	z-index: 5;
	opacity: 0.65;
}

.cloud3d.storm {
	animation: driftLine 60s linear infinite;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
	opacity: 1;
	z-index: 5;
}

.cloud3d.drift {
	animation: driftLine 60s linear infinite;
}

.puff {
	position: absolute;
	width: 400px; 
	height: 500px;
	border-radius: 50%;
	background: radial-gradient(
		ellipse at center,
		rgba(255, 255, 255, var(--cloud-opacity, 0.8)) 0%,
		rgba(200, 200, 200, 0.4) 60%,
		rgba(255, 255, 255, 0) 100%
	);
	mix-blend-mode: screen;
	transition: opacity 0.5s ease;
}

.cloud3d.storm .puff {
	background: radial-gradient(
		ellipse at center,
		rgba(120, 120, 120, var(--cloud-opacity, 0.8)) 0%,
		rgba(60, 60, 60, 0.4) 60%,
		rgba(0, 0, 0, 0) 100%
	);
}

@keyframes driftLine {
	from {
		transform: translateX(-100vw);
	}
	to {
		transform: translateX(100vw);
	}
}

@media (max-width: 768px) {
	.cloud3d.storm, .cloud3d {
		opacity: 0.45;
	}
}

@media (max-width: 480px) {
	.cloud3d.storm, .cloud3d {
		opacity: 0.45;
	}
}

</style>
