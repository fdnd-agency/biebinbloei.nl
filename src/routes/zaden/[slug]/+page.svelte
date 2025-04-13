<script>
  export let data;
  import { HarryWeather, Features } from '$lib/index.js';
  
  let mood; 
  let environment; 

</script>

<header>
  <div class="overlay"></div>
  <img src="{data.zaden.fotos[0].url}" alt="" width={data.zaden.fotos[0]?.width || 'auto'} height={data.zaden.fotos[0]?.height || 'auto'}  class="header" loading="lazy">
</header>

<HarryWeather textTemp={data.zaden.absoluteTemperatuur}, name={data.zaden.naam} />

<section class="container">
  <div class="stekje-container">
    <article>
        <h1>{data.zaden.naam}</h1>
        <p>{data.zaden.beschrijving}</p>
        <img src="{data.zaden.fotos[0].url}" alt="{data.zaden.naam}" width="15em" />
    </article>

    <Features {data} type="zaden" />
  </div>
</section>
  
<style>

  .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40vh;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
    }

  .header {
    height: 40vh ;
    width: 100%;
    object-fit: cover;
    margin: -1em 0;
  }

  section {
    position: relative;
    width: 100%;
    background-color: var(--main-color-green);
    margin: 0;
    overflow-x: hidden;
  }

  h1 {
    color: var(--main-color-brown);
    font-family: var(--header-font);
    font-size: 2em;
  }

  h1::before {
    content: url('/assets/orangeArrow.svg');
    margin-right: .625em;
  }

  .container {
    padding: 2em 1em;
  }

  .stekje-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(22em - 2 * 1.5em), 1fr));
    grid-gap: 2rem;
    width: 100%;
    background-color: #f9e9c2;
    border-radius: var(--border-bigCard);
    padding: 1.5em 1em;
  }
  
  article {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  article img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: var(--border-card);
  }

  p{
      line-height: var(--line-height-paragraph);
    }

  @media screen and (max-width: 375px) {
    .stekje-container {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (min-width: 32em) {
      .container {
        padding: 2em;
      }

      .stekje-container {
        padding: 2em;
      }

      article img {
        height: 20rem;
      }
    }

    /* desktop */
    @media screen and (min-width: 64em) {
      article img {
        width: 15em; 
        height: auto; 
      }
    }

    @media screen and (min-width: 100em) {
      p{
        font-size: 1.1em;
      }
    }

</style>
  