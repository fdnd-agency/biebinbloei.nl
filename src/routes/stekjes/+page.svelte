<script>
	import { HeroHeaders, OverViewPages, IntroHeaders, ImageCarousel } from '$lib/index.js';
	import Stekjesfilter from '$lib/molecules/stekjesfilter.svelte';
	let { data } = $props();
</script>

<HeroHeaders heroInfo={data.heroHeaders[0]} />
<IntroHeaders heroInfo={data.heroHeaders[0]} />

<Stekjesfilter />

<!-- <ImageCarousel heroInfo={data.heroHeaders[0]} /> -->

<!-- <OverViewPages 
  viewPageData={data.overviewPages[0]} 
  
  /> -->
