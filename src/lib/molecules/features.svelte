<script>
    import { HarryWeather, Dropdown } from '$lib/index.js';
    
    let { data, type } = $props();
</script>

<section>
    <Dropdown {data} {type} />
</section>

<style>
    section {
        background-color: #fbc980;
        border-radius: var(--border-card);
    }
</style>