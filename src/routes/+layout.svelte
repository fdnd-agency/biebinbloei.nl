<script>
	import { Menu, Footer } from '$lib/index.js';
	import { onNavigate } from '$app/navigation';
	import '../styles/global.css';
	
	let { data, children } = $props();

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
{@render children?.()}
<Footer {data} />
