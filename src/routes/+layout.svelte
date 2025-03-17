<script>
	export let data;
	import { Menu, Footer } from '$lib/index.js';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Menu />
<slot />
<Footer {data} />

<style>
	@keyframes strong-slide-in {
		0% {
			transform: translateY(40px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes strong-slide-out {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-20px);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		:root::view-transition-old(root) {
			animation: 600ms cubic-bezier(0.4, 0, 0.2, 1) both strong-slide-out;
		}

		:root::view-transition-new(root) {
			animation: 600ms cubic-bezier(0.4, 0, 0.2, 1) 100ms both strong-slide-in;
		}
	}
</style>
