<script>
	import { HeroHeaders, ContactForm } from '$lib/index.js';
    let { data } = $props();

</script>

<HeroHeaders 
    heroInfo={data.heroHeaders[5]}
/>

<main>
    <section>
        <header>
            <h2>{data.contacts[0].title}</h2>
            <p>{data.contacts[0].contactIntro}</p>
        </header>
        <ContactForm />
        <iframe 
            title="locactie van buurtcampus op google maps" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9746.694701928573!2d4.90776298107777!3d52.35820356282836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6097132bffcc7%3A0x290544c1d1a9e37c!2sOBA%20Linnaeus!5e0!3m2!1snl!2snl!4v1701117358615!5m2!1snl!2snl" 
            width="400" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </section>
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    section{
        display: grid;
        flex-direction: column;
        background-color: var(--main-color-beige);
        border-radius: var(--border-card);
        height: 100%;
        width: 100%;
        top: -1em;
        position: relative;
        padding: 2em 3em 3em;
        overflow: hidden;
        font-family: var(--sub-header-font);
    }
    section::after{
        content: url(/assets/leaf-orange.svg);
        width: 17em;
        height: 17em;
        opacity: 0.5;
        position: absolute;
        right: -3em;
        top: -3em;
        transform: rotate(-45deg);
    }

    header::after{
        content: url(/assets/Circle-Orange.svg);
        position: absolute;
        top: 3.6em;
        margin: 0 -2.1em;
    }
    h2{
        position: relative;
        padding-bottom: .5em;
        font-family: var(--header-font);
        font-size: 3em;
        max-width: 80%;
        line-height: 95%;
    }
    h2, p{
        position: relative;
        color: var(--card-color-green);
        z-index: 2;
    }

    p{
        font-size: 1.2em;
        font-family: var(--paragraph-font);
        line-height: var(--line-height-paragraph);
    }

    iframe{
        border-radius: var(--border-card);
        width: 96%;
        height: 15em;
        margin: 2em 0 0;
        z-index: 2;
    }

    /* MEDIA QUERY TABLET = 500px */
    @media (min-width: 31rem) {
        header {
            width: 60%;
        }
        p{
            min-width: 21em;
        }
    }

    /* MEDIA QUERY TABLET = 768px */
    @media (min-width: 48rem) {
        section{
            width: 97%;
            padding: 3.5em 2em 1em 5em;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
                'blok1 blok2'
                'blok1 blok2';
            grid-area: blok1;
            gap: 0 5em;
        }

        section::after{
            width: 23em;
            left: -3em;
            top: -2em;
            transform: rotate(70deg);
        }
        header{
            width: 65%;
        }
        header::after{
            top: 4.5em;
            margin: 0 -3em;
        }
        h2{
            font-size: 4em;
            min-width: 5em;
        }
        iframe{
            height: 95%;
            grid-area: blok2;
            width: 96%;
            margin: 0;
        }
    }

    @media (min-width: 37.5rem) and (max-width: 50rem) {
		section {
			display: flex;
			padding: 3.5em 2em 1em 5em;
			gap: 0 5em;
		}

		iframe {
			height: 50vh;
		}
	}

    @media (min-width: 50rem) and (max-width: 64rem) {
		section {
			display: flex;
			padding: 3.5em 2em 1em 5em;
			gap: 0 5em;
		}

		iframe {
			height: 50vh;
		}
	}

    /* MEDIA QUERY TABLET = 1200px */
    @media (min-width: 75rem) {
        header{
            width: 75%;
        }
    }

    /* MEDIA QUERY TABLET = 1500px */
    @media (min-width: 93rem) {
        section{
            top: -3em;
        }
        header{
            width: 80%;
        }
    }

</style>