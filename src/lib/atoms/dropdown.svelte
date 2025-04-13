<script>
    export let data;
    export let type;
</script>

{#if data[type]?.landvanherkomst}
    <details data-name="kenmerken" open>
        <summary id="landherkomst-summary">
            <img src="/assets/land-icon.svg" alt="icoon van wereldbol" aria-hidden="true">
            Landherkomst
        </summary>
        <p aria-labelledby="landherkomst-summary">{data[type].landvanherkomst}</p>
    </details>
{/if}

{#if data[type]?.voeding}
    <details data-name="kenmerken" open>
        <summary id="voeding-summary">
            <img src="/assets/voeding-icon.svg" alt="Voeding icoon" aria-hidden="true">
            Voeding
        </summary>
        <p aria-labelledby="voeding-summary">{data[type].voeding}</p>
    </details>
{/if}

{#if data[type]?.temperatuur}
    <details data-name="kenmerken" open>
        <summary id="temperatuur-summary">
            <img src="/assets/temperatuur-icon.svg" alt="Temperatuur icoon" aria-hidden="true">
            Kenmerken
        </summary>
        <p aria-labelledby="temperatuur-summary">{data[type].temperatuur}</p>
    </details>
{/if}

{#if data[type]?.giftig}
    <details data-name="kenmerken" open>
        <summary id="giftig-summary">
            <img src="/assets/giftig-icon.svg" alt="Giftig icoon" aria-hidden="true">
            Giftig
        </summary>
        <p aria-labelledby="giftig-summary">{data[type].giftig}</p>
    </details>
{/if}

{#if data[type]?.verpotten}
    <details data-name="kenmerken" open>
        <summary id="verpotten-summary">
            <img src="/assets/verpotten-icon.svg" alt="Verpotten icoon" aria-hidden="true">
            Verpotten
        </summary>
        <p aria-labelledby="verpotten-summary">{data[type].verpotten}</p>
    </details>
{/if}

{#if data[type]?.watergeven}
    <details data-name="kenmerken" open>
        <summary id="watergeven-summary">
            <img src="/assets/watergeven-icon.svg" alt="Watergeven icoon" aria-hidden="true">
            Watergeven
        </summary>
        <p aria-labelledby="watergeven-summary">{data[type].watergeven}</p>
    </details>
{/if}

{#if data[type]?.zonlicht}
    <details data-name="kenmerken" open>
        <summary id="zonlicht-summary">
            <img src="/assets/zonlicht-icon.svg" alt="Zonlicht icoon" aria-hidden="true">
            Zonlicht
        </summary>
        <p aria-labelledby="zonlicht-summary">{data[type].zonlicht}</p>
    </details>
{/if}

{#if data[type]?.stekken}
    <details data-name="kenmerken" open>
        <summary id="stekken-summary">
            <img src="/assets/stekken-icon.svg" alt="Stekken icoon" aria-hidden="true">
            Stekken
        </summary>
        <p aria-labelledby="stekken-summary">{data[type].stekken}</p>
    </details>
{/if}

<style>
    details {
        position: relative;
        width: 100%;
    }

    summary {
        display: flex;
        align-items: center;
       
        font-family: var(--sub-header-font);
        text-transform: uppercase;
        font-weight: 600;
        border-radius: var(--border-card);
       
        padding: 0.9375em;
        
        background-color: #fbc980;
        color: var(--main-color-brown); 
        transition: background-color 0.3s;
        cursor: pointer;
    }
    
    summary img {
        padding-right: 0.9375em;
    }

    summary:hover,
    details[open] summary,
    details[open] p {
      background-color: #f5c275;
    }

    details[open] {
        min-height: 3.75rem;
    }

    details[open] summary {
        border-radius: 1em 1em 0 0 ;
    }

    details p {
        border-radius: 1em 1em 0 0 ;
        background-color: #fbc980;
        padding: 0.9375em;
        color: #000;
    }

    details[open] p {
        border-radius: 0em 0em 1em 1em ;
    }

    summary::after {
        content: "+";
        position: absolute;
        right: 0.9375em;
    }
    
    details[open] summary::after{
        content: "-";
    }

    @media (min-width: 100em) {
		details{
			font-size: 19px;
		}
	}
</style>