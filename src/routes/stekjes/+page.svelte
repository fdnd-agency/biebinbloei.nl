<script>
    import { HeroHeaders, OverViewPages, IntroHeaders, ImageCarousel} from '$lib/index.js';
  let { data } = $props();

</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[0]}"
/>
<IntroHeaders  heroInfo="{data.heroHeaders[0]}" />

<ImageCarousel  heroInfo="{data.heroHeaders[0]}" />

<OverViewPages 
  viewPageData="{data.overviewPages[0]}" 
  
  />
 
