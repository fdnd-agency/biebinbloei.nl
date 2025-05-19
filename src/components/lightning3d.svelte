<!-- Lightning3D.svelte -->
<script>
	import { onMount } from 'svelte';

	let bolts = Array.from({ length: 3 }, (_, i) => ({
		delay: Math.random() * 5,
		top: Math.random() * 70,
		left: Math.random() * 80
	}));
</script>

{#each bolts as bolt, i}
	<div
		class="lightning-bolt"
		style="top: {bolt.top}%; left: {bolt.left}%; animation-delay: {bolt.delay}s;"
	></div>
{/each}

<style>
.lightning-bolt {
	position: absolute;
	width: 2px;
	height: 150px;
	background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
	opacity: 0;
	animation: flash-bolt 6s infinite ease-out;
	z-index: 50;
}

@keyframes flash-bolt {
	0%, 97%, 100% {
		opacity: 0;
		transform: translateY(-10px);
	}
	98% {
		opacity: 0.9;
		transform: translateY(10px) scaleX(1.2);
	}
	99% {
		opacity: 0.4;
		transform: translateY(30px) scaleX(0.9);
	}
}
</style>
