<script>
    import { run } from 'svelte/legacy';

    import { onMount } from 'svelte'; 
    import Harry from '$lib/atoms/harry.svelte';
    import { page } from '$app/stores';
    import { get } from 'svelte/store';

    let { textTemp, name } = $props();

    let city = 'Amsterdam';
    let weather = $state();

    let mood = $state('happy');
    let environment = $state('neutral');
    let sentence = $state('Ik ben even in de war');
    let detail = $state('');
    let isDesktop = false;
    let isVisible = $state(true);

    const numericTextTemp = parseFloat(textTemp) || 25;

    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d2a223715e49a67159446b130d4482&lang=nl&units=metric`
        );
        weather = await res.json();

        const currentTemp = weather.main.temp;
        const currentRain = weather.rain ? (weather.rain['1h']) : null;

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
    <div class="weather-bubble">
        <blockquote>
            “{sentence}<span class="home_page"> {detail}</span>”
        </blockquote>
        <button onclick={() => isVisible = false}>❌</button>
    </div>
    <Harry {mood} {environment} {textTemp}/>
</div>
{/if}
