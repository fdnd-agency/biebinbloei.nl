<script>
	import { HeroSlider, SlideCards, Agenda, HomeCampus, HomePartners } from '$lib/index.js';
	let { data } = $props();
</script>

<HeroSlider {data} />
<SlideCards {data} />
<HomeCampus {data} />
<Agenda {data} />
<HomePartners {data} />
