<script>
	import {
		HeroHeaders,
		OverViewPages,
		IntroHeaders,
		ImageCarousel,
		Stekjesfilter
	} from '$lib/index.js';

	let { data } = $props();

	const allStekjes = data.overviewPages[0].product;

	let activeFilter = $state('actueel');
	let filteredStekjes = $state(allStekjes.filter((stekje) => stekje.activeStekje === 1));

	function showAll() {
		activeFilter = 'alle';
		filteredStekjes = allStekjes;
	}

	function showCurrent() {
		activeFilter = 'actueel';
		filteredStekjes = allStekjes.filter((stekje) => stekje.activeStekje === 1);
	}
</script>

<HeroHeaders heroInfo={data.heroHeaders[0]} />

<!-- <IntroHeaders heroInfo={data.heroHeaders[8]} /> -->

<Stekjesfilter on:showAll={showAll} on:showCurrent={showCurrent} active={activeFilter} {data} />

<OverViewPages viewPageData={{ ...data.overviewPages[0], product: filteredStekjes }} />
