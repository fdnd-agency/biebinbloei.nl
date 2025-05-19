<script>
	export let storm = false;
	export let scale = 1.5; // default size multiplier
</script>


<div
	class="cloud3d {storm ? 'storm' : ''}"
	style="transform: scale({scale});"
>
	{#each Array(20) as _, i}
		<div class="puff" style="--i: {i};"></div>
	{/each}
</div>

<style>
.cloud3d {
	position: relative;
	width: 800px;
	height: 800px;
	perspective: 3200px; /* 4x original 800px */
	transform-style: preserve-3d;
	animation: stormDrift 40s linear infinite;
}

.puff {
	position: absolute;
	width: 400px;
	height: 400px;
	background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
	border-radius: 50%;
	transform: rotateY(calc(var(--i) * 18deg)) translateZ(240px) translateX(80px);
	transform-style: preserve-3d;
}

.cloud3d.storm .puff {
	background: radial-gradient(ellipse at center, rgba(120, 120, 120, 0.9), rgba(0, 0, 0, 0));
}

@keyframes stormDrift {
	from {
		transform: translateX(-100vw) translateY(0);
	}
	to {
		transform: translateX(100vw) translateY(20px);
	}
}
</style>
