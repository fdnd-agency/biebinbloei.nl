<script>
	export let storm = false;
	export let cloudOpacity = 0.4;
	export let puffCount = 30;

	let puffs = Array.from({ length: puffCount }, () => ({
		top: 30 + Math.random() * 20,     // tighter vertical band: 30%–50%
		left: Math.random() * 60,         // narrower horizontal spread: 0%–80%
		scale: 0.8 + Math.random() * 0.3, // closer sizes: 0.8–1.1
		opacity: 0.35 + Math.random() * 0.25
	}));
</script>



<div class="cloud3d {storm ? 'storm' : ''}">
	{#each puffs as puff}
		<div
			class="puff"
			style="
				top: {puff.top}%;
				left: {puff.left}%;
				transform: scale({puff.scale});
				opacity: {puff.opacity};
			"
		></div>
	{/each}
</div>

<style>
.cloud3d {
	position: absolute;
	top: 20%;
	left: 0;
	width: 100vw;
	height: 500px;
	animation: driftLine 60s linear infinite;
	pointer-events: none;
}

.puff {
	position: absolute;
	width: 200px;
	height: 120px;
	border-radius: 50%;
	background: radial-gradient(
		ellipse at center,
		rgba(255, 255, 255, var(--cloud-opacity, 0.9)),
		rgba(255, 255, 255, 0)
	);
}

.cloud3d.storm .puff {
	background: radial-gradient(
		ellipse at center,
		rgba(120, 120, 120, var(--cloud-opacity, 0.9)),
		rgba(0, 0, 0, 0)
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
</style>
