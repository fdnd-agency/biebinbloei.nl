<script>
    import { Button } from '$lib/index.js';
    let { data } = $props();
</script>

<section>
    <h2>{data.partnersInfos[0].title}</h2>
    <p>{data.partnersInfos[0].paragraph}</p>
    <p>{data.partnersInfos[0].paragraph2}</p>
    <Button 
        href="/partners"
        buttonText="Bekijk onze partners"
        buttonClass="btn-beige"
        svgFill="svg-green"
    />
</section>

<style>
    section{
        padding: var(--section-padding-y) 1em;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: start;
        min-height: 70vh;
        background-color: var(--card-color-green);
        color: var(--main-color-beige);
        overflow: hidden;
        position: relative;
    }


    section::before{
        content: url(/assets/leaf-light-green.svg);
        width: 30em;
        height: 30em;
        position: absolute;
        right: -8em;
        transform: rotate(-45deg);
        opacity: .2;
        overflow: hidden;
    }

    h2{
        font-family: var(--sub-header-font);
        font-size:  clamp(2em, 5vw, 8em);
        line-height: 1;
        padding-bottom: .7em;
    }

    p{
        max-width: 65ch;
        line-height: var(--line-height-paragraph);
    }

    p:nth-of-type(1){
        padding: .5em 0;
        text-decoration: underline;
    }

    p:nth-of-type(2){
        padding-bottom: 3em;
    }


	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		section{
			padding:  var(--section-padding-y) var(--section-padding-x);
		}
	}

    /* MEDIA QUERY TABLET = 1250px */
    @media (min-width: 78.1rem) {
         p{
			max-width: 43em
		}
    }

    /* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
        section{
            padding: var(--section-padding-y) 15em;
        }

        p{
            font-size: 1.1em;
			max-width: 43em
		}
    }

</style>