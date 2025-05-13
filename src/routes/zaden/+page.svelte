<script>
	import { HeroHeaders, OverViewPages, IntroHeaders, ImageCarousel } from '$lib/index.js';
	let { data } = $props();
</script>

<HeroHeaders heroInfo={data.heroHeaders[1]} />

<IntroHeaders heroInfo={data.heroHeaders[1]} />

<h2>Binnenkort vind je hier de nieuwste Zaden!</h2>

<ImageCarousel heroInfo={data.heroHeaders[1]} />

<p>{data.copyrights[0].title}</p>

<OverViewPages viewPageData={data.overviewPages[1]} />

<style>
	h2 {
		font-family: var(--header-font);
		font-size: clamp(2em, 10vw, 3em);
		margin-top: 2em;
		line-height: 1.5em;
		padding: 0 1em 0 1em;
	}

	p {
		display: flex;
		position: relative;
		font-weight: 500;
		margin: 0;
		padding: 3rem;
		padding-left: 1.5em;
	}
</style>
