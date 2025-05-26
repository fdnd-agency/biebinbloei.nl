<script>
    import { run } from 'svelte/legacy';
    import { onMount } from 'svelte'; 
    import { page } from '$app/stores';
    import { get } from 'svelte/store';

    // Harry variants
    import Harry from '$lib/atoms/harry.svelte';
    import HarrySpring from '$lib/atoms/harry-spring.svelte';
    import HarryDrySummer from '$lib/atoms/harry-watering-can.svelte';
    import HarryAutumn from '$lib/atoms/harry-rake.svelte';
    import HarryStorm from '$lib/atoms/harry-lightning.svelte';
    import HarryWinter from '$lib/atoms/harry-sweater.svelte';

    let { textTemp, name } = $props();

    let city = 'Amsterdam';
    let weather = $state();
    let mood = $state('happy');
    let environment = $state('neutral');
    let sentence = $state('Ik ben even in de war');
    let detail = $state('');
    let isDesktop = false;
    let isVisible = $state(true);
    let mascotType = $state('default');

    const numericTextTemp = parseFloat(textTemp) || 25;

    const today = new Date();
    const month = today.getMonth(); // 0-indexed
    const date = today.getDate();

    function getSeason(month, date) {
    if (month === 11 || month <= 1) return 'winter';
    if ((month === 2 && date >= 21) || (month > 2 && month < 5) || (month === 5 && date <= 21)) return 'spring';
    if ((month === 5 && date > 21) || (month >= 6 && month < 8)) return 'summer';
    if ((month === 8 && date >= 21) || (month >= 9 && month <= 10)) return 'autumn';
    return 'unknown';
}

    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d2a223715e49a67159446b130d4482&lang=nl&units=metric`
        );
        weather = await res.json();

        const currentTemp = weather.main.temp;
        const currentRain = weather.rain ? (weather.rain['1h']) : null;
        const weatherMain = weather.weather[0].main.toLowerCase();
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();
        const season = getSeason(month, date);

        let tempDifference = currentTemp - numericTextTemp;

        function addRainSentence(base) {
            return base + (isDesktop ? (currentRain !== null ? ` Ook nog ${currentRain.toFixed(1)}mm regen per uur!` : ' Gelukkig droog!') : '');
        }

        switch (true) {
            case currentTemp >= numericTextTemp + 15:
                mood = 'angry';
                environment = 'sunny';
                sentence = addRainSentence(`Het is echt te heet! ${currentTemp.toFixed(0)}°C.`);
                detail = ` De ${name} vindt dit echt te warm.`;
                break;

            case currentTemp >= numericTextTemp + 10:
                mood = 'sad';
                environment = 'sunny';
                sentence = addRainSentence(`Het is warm... ${currentTemp.toFixed(0)}°C.`);
                detail = ` De ${name} voelt zich niet helemaal comfortabel.`;
                break;

            case currentTemp >= numericTextTemp + 5:
                mood = 'neutral';
                environment = 'sunny';
                sentence = addRainSentence(`Het is aangenaam. ${currentTemp.toFixed(0)}°C.`);
                detail = ` De ${name} vindt het wel aangenaam.`;
                break;

            case currentTemp >= numericTextTemp - 5 && currentTemp <= numericTextTemp + 5:
                mood = 'happy';
                environment = 'neutral';
                sentence = addRainSentence(`Perfect weer! ${currentTemp.toFixed(0)}°C.`);
                detail = ` De ${name} is helemaal tevreden.`;
                break;

            case currentTemp <= numericTextTemp - 15:
                mood = 'angry';
                environment = 'cold';
                sentence = addRainSentence(`Het is veel te koud! ${currentTemp.toFixed(0)}°C.`);
                detail = ` De ${name} heeft het veel te koud.`;
                break;

            case currentTemp <= numericTextTemp - 10:
                mood = 'sad';
                environment = 'cold';
                sentence = addRainSentence(`Het is behoorlijk koud, ${currentTemp.toFixed(0)}°C.`);
                detail = ` De ${name} heeft het liever iets warmer.`;
                break;

            case currentTemp <= numericTextTemp - 5:
                mood = 'neutral';
                environment = 'cold';
                sentence = addRainSentence(`Het is een beetje fris. ${currentTemp.toFixed(0)}°C.`);
                detail = ` De ${name} vindt het net te frisjes.`;
                break;
        }

        // Mascot logic
        if (weatherMain.includes('storm')) {
            mascotType = 'storm';
        } else if (season === 'summer' && weather.main?.humidity < 30) {
            mascotType = 'drySummer'; // Replace with actual dry days logic if needed
        } else if (season === 'spring') {
            mascotType = 'spring';
        } else if (season === 'autumn') {
            mascotType = 'autumn';
        } else if (season === 'winter') {
            mascotType = 'winter';
        } else {
            mascotType = 'default';
        }
    
    }

    let animationClass = $state();

    run(() => {
        const currentPage = get(page).url.pathname;

        switch (true) {
            case currentPage.includes('stekjes'):
                animationClass = 'stekjes';
                break;
            case currentPage.includes('zaden'):
                animationClass = 'zaden';
                break;
            default:
                animationClass = 'default';
        }
    });

    onMount(() => {
        getWeather();

        const checkDesktop = () => {
            isDesktop = window.innerWidth >= 48 * 16; // 48rem to pixels
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);

        return () => {
            window.removeEventListener('resize', checkDesktop); 
        };
    });
</script>

{#if weather && isVisible}
<div class="harryMascot {animationClass}">
    <!-- <div class="weather-bubble">
        <blockquote>
            “{sentence}<span class="home_page"> {detail}</span>”
        </blockquote>
        <button onclick={() => isVisible = false}>❌</button>
    </div> -->
    <!-- <Harry {mood} {environment} {textTemp}/> -->

    {#if mascotType === 'spring'}
        <HarrySpring />
    {:else if mascotType === 'autumn'}
        <HarryAutumn />
    {:else if mascotType === 'winter'}
        <HarryWinter />
    {:else if mascotType === 'drySummer'}
        <HarryDrySummer />
    {:else if mascotType === 'storm'}
        <HarryStorm />
    {:else}
        <Harry {mood} {environment} {textTemp} />
    {/if}
    
</div>
{/if}
