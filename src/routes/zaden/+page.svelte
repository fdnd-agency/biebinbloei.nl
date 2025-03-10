<script>
	export let data;
	import { HeroHeaders, OverViewPages, IntroHeaders, ImageCarousel } from '$lib/index.js';
</script>

<HeroHeaders heroInfo={data.heroHeaders[1]} />

<IntroHeaders heroInfo={data.heroHeaders[1]} />

<ImageCarousel heroInfo={data.heroHeaders[1]} />

<p>{data.copyrights[0].title}</p>

<OverViewPages viewPageData={data.overviewPages[1]} />

<style>
	p {
		display: flex;
		position: relative;
		font-weight: 500;
		margin: 0;
		padding: 3rem;
		padding-left: 1.5em;
	}
</style>
