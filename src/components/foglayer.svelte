<script>
	export let layer = 1;
</script>

<div class="fog fog-{layer}"></div>

<style>
.fog {
	position: absolute;
	top: 0;
	left: -100%;
	width: 200%;
	height: 100%;
	background-image: url('./small-cloud-3.png');
	background-size: cover;
	opacity: 0.2;
	animation: fog-move 30s linear infinite;
	pointer-events: none;
	z-index: calc(2 + var(--layer));
}

.fog-2 {
	background-image: url('./small-cloud-1.png');
	animation-duration: 60s;
	opacity: 0.15;
}

@keyframes fog-move {
	0% {
		transform: translateX(-10%);
	}
	100% {
		transform: translateX(10%);
	}
}
</style>
