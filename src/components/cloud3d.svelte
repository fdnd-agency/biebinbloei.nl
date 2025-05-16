<script>
	export let storm = false;
</script>

<div class="cloud3d {storm ? 'storm' : ''}">
	{#each Array(20) as _, i}
		<div class="puff" style="--i: {i};"></div>
	{/each}
</div>

<style>
.cloud3d {
	position: relative;
	width: 200px;
	height: 120px;
	perspective: 800px;
	transform-style: preserve-3d;
	animation: floatCloud 20s linear infinite;
}

.puff {
	position: absolute;
	width: 100px;
	height: 100px;
	background: radial-gradient(ellipse at center, rgba(255,255,255,0.9), rgba(255,255,255,0));
	border-radius: 50%;
	transform: rotateY(calc(var(--i) * 18deg)) translateZ(60px) translateX(20px);
	transform-style: preserve-3d;
}

.cloud3d.storm .puff {
	background: radial-gradient(ellipse at center, rgba(120,120,120,0.9), rgba(0,0,0,0));
}

@keyframes floatCloud {
	from {
		transform: translateX(-100vw);
	}
	to {
		transform: translateX(100vw);
	}
}
</style>
