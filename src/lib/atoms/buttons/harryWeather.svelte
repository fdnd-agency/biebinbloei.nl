<script>
    import { run } from 'svelte/legacy';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { get } from 'svelte/store';

  
    import Harry from '$lib/atoms/harry.svelte';

    let { textTemp, name } = $props();

    let city = 'Amsterdam';
    let weather = $state();
    let mood = $state('happy');
    let environment = $state('neutral');
    let sentence = $state('Ik ben even in de war');
    let detail = $state('');
    let isDesktop = false;
    let isVisible = $state(true);
    let animationClass = $state();
    let mascotType = $state('default');

    const numericTextTemp = parseFloat(textTemp) || 25;

    
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
        const currentRain = weather.rain ? weather.rain['1h'] : null;
        const weatherMain = weather.weather[0].main.toLowerCase();
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();
        const season = getSeason(month, date);

        let tempDifference = currentTemp - numericTextTemp;

        function addRainSentence(base) {
            return base + (isDesktop
                ? (currentRain !== null
                    ? ` Ook nog ${currentRain.toFixed(1)}mm regen per uur!`
                    : ' Gelukkig droog!')
                : '');
        }

        // Mood & environment logic
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

        
        if (weatherMain.includes('storm')) {
            mascotType = 'storm';
        } else if (season === 'summer' && weather.main?.humidity < 30) {
            mascotType = 'drySummer'; 
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
            isDesktop = window.innerWidth >= 48 * 16; // 48rem in px
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
    <div class="weather-bubble">
        <blockquote>
            “{sentence}<span class="home_page"> {detail}</span>”
        </blockquote>
        <button onclick={() => isVisible = false}>❌</button>
    </div>

    {#if mascotType === 'spring'}
        <img src="./assets/lineus-klokje-harry.svg" alt="Harry Spring" class="cartoon" />
    {:else if mascotType === 'autumn'}
        <img src="./assets/Harry-met-een-hark.svg" alt=" Harry" class="cartoon" />
    {:else if mascotType === 'winter'}
        <img src="./assets/Harry-met-een-trui.svg" alt="Harry Winter" class="cartoon" />
    {:else if mascotType === 'drySummer'}
        <img src="./assets/Harry-met-een-gieter.svg" alt="Harry Summer" class="cartoon" />
    {:else if mascotType === 'storm'}
        <img src="./assets/bliksem-harry.svg" alt="Harry Storm" class="cartoon" />
    {:else}
        <Harry {mood} {environment} {textTemp} />
    {/if}
</div>
{/if}
