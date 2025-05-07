<script>
    import { onMount } from 'svelte';
  
    let weather = null;
    let loading = true;
    let error = null;
    let cloud = 65; // Default cloud coverage value
    let weatherClass = 'default';
  
    const API_URL = 'https://api.weatherapi.com/v1/current.json';
    const API_KEY = '35d06ad897c84f6e8c7112446251504';
    const CITY = 'Amsterdam';  
  
    function getWeatherClass(condition) {
    const text = condition.toLowerCase();
    if (text.includes('thunder')) return 'thunderstorm';
    if (text.includes('partly') || text.includes('cloudy')) return 'partly-cloudy';  // Correct weather check
    if (text.includes('sunny')) return 'sunny';
    if (text.includes('clear')) return 'sunny';
    if (text.includes('fog') || text.includes('mist') || text.includes('overcast')) return 'fog';
    if (text.includes('rain')) return 'rain';
    return 'default';
  }
  
  onMount(async () => {
    try {
      const res = await fetch(`${API_URL}?key=${API_KEY}&q=${CITY}&aqi=yes`);
      const data = await res.json();
      weather = data;
      cloud = data.current.cloud; 
      weatherClass = getWeatherClass(weather.current.condition.text);
    } catch (err) {
      error = 'Failed to fetch weather data';
    } finally {
      loading = false;
    }
  });
  </script>
  
  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p>{error}</p>
  {:else}
    <div class={`weather-container ${weatherClass}`} style="--cloud: {cloud}%;">

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="position: absolute; height: 0;">
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {#if weatherClass === 'partly-cloudy' || weatherClass === 'default'}
      <!-- Cloud Divs -->
  <div class="cloud-wrapper">
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
  </div>
    {/if}
      {#if weatherClass === 'sunny'}
    <div class="sun"></div>
      {/if}
  
      {#if weatherClass === 'thunderstorm'}
        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>
        <div class="lightning"></div>
      {/if}
  
      {#if weatherClass === 'fog'}
        <div class="fog-layer"></div>
        <div class="fog-layer fog-layer-2"></div>
      {/if}

      {#if weatherClass === 'rain'}
      <div class="rain">
    {#each Array(100) as _, i}
      <div class="raindrop" style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"></div>
    {/each}
  </div>
{/if}

{#if weatherClass === 'hail'}
  <div class="hail">
    {#each Array(50) as _, i}
      <div class="hailstone" style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"></div>
    {/each}
  </div>
{/if}

{#if weatherClass === 'snow'}
  <div class="snow">
    {#each Array(100) as _, i}
      <div class="snowflake" style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 10}s;"></div>
    {/each}
  </div>
{/if}
  

</div>
  {/if}
  
  <style>
.weather-header {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    transition: background-image 0.8s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
  }

  .weather-info {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 8px;
    height: 100vh;
    background-image: url(./night-sky.jpg);
    color: #fff0f0;
  }
  
    /* ☀️ Clear Weather */
    .clear {
      animation: clouds-clear 5s ease-in forwards;
    }
  
    @keyframes clouds-clear {
      0% {
        --cloud: 65%;
      }
      100% {
        --cloud: 15%;
      }
    }

  .sunny {
  background: linear-gradient(to top, #87ceeb, #fffacd);
  animation: sunnyGlow 8s infinite alternate;
}

.sun {
  position: absolute;
  top: 60px;
  right: 60px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, #FFD700 60%, #FFA500 100%);
  border-radius: 50%;
  box-shadow: 0 0 20px 10px rgba(255, 223, 0, 0.6);
  animation: rotateSun 12s linear infinite;
  z-index: 2;
}

@keyframes rotateSun {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes sunnyGlow {
  0% { background-color: #fffacd; }
  100% { background-color: #ffffe0; }
}
  
  
    /* ⛈️ Thunderstorm */
    .thunderstorm {
      --cloud: 80%;
      animation: storm-flash 1s step-start infinite;
    }
  
    @keyframes storm-flash {
      0%, 100% {
        background-image: linear-gradient(
          to bottom,
          hsl(231, 1%, 80%) 50%,
          hsl(231, 1%, 21%) 70%
        );
      }
      50% {
        background-image: linear-gradient(
          to bottom,
          hsl(231, 1%, 95%) 50%,
          hsl(231, 1%, 30%) 70%
        );
      }
    }
  
    /* 🌫️ Fog Effect */
    .fog-layer {
      position: absolute;
      bottom: 0;
      left: -100%;
      width: 200%;
      height: 50%;
      background: rgba(255, 255, 255, 0.2); 
      animation: fog-move 20s linear infinite;
      z-index: 1;
      clip-path: polygon(84% 23%, 80% 8%, 63% 6%, 53% 16%, 
                       46% 10%, 38% 17%, 33% 6%, 6% 12%, 
                       4% 30%, 12% 34%, 17% 46%, 10% 50%, 
                       10% 61%, 26% 64%, 34% 77%, 53% 82%, 
                       72% 71%, 70% 56%, 80% 48%, 93% 48%, 
                       95% 38%, 90% 22%);
    }
  
    .fog-layer-2 {
      animation-delay: 10s;
      background: rgba(255, 255, 255, 0.3);
      clip-path: polygon(84% 23%, 80% 8%, 63% 6%, 53% 16%, 
                       46% 10%, 38% 17%, 33% 6%, 6% 12%, 
                       4% 30%, 12% 34%, 17% 46%, 10% 50%, 
                       10% 61%, 26% 64%, 34% 77%, 53% 82%, 
                       72% 71%, 70% 56%, 80% 48%, 93% 48%, 
                       95% 38%, 90% 22%);
    }
  
    @keyframes fog-move {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
  
      /* Partly Cloudy Animation */
      .partly-cloudy {
       animation: cloud-drift 10s ease-in-out infinite alternate;
     }
   
     @keyframes cloud-drift {
       0% {
         --cloud: 55%;
       }
       100% {
         --cloud: 65%;
       }
     }

     .cloud-wrapper {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       /* background-image: url(./cloud-6.png);
       background-repeat: no-repeat;
       background-size: 100% auto;
       background-position:  top;
       object-fit: cover; */
       animation: moveCloud 20s linear infinite;
       z-index: 10;
     }

     .cloud-1 { background-image: url(./cloud.png); width: 100px; height: 90px; left: 20px; top: 20px; }
     .cloud-2 { width: 80px; height: 120px; left: 60px; top: 10px; }
     .cloud-3 { width: 150px; height: 80px; left: 110px; top: 25px; }

     .cloud {
    height: 180px; /* control the size */
    aspect-ratio: 1.8;
    --g: radial-gradient(50% 50%, #000 98%, #0000) no-repeat;
    mask: var(--g) 100% 100%/30% 60%,var(--g) 70% 0/50% 100%,var(--g) 0 100%/36% 68%,var(--g) 27% 18%/26% 40%,linear-gradient(#000 0 0) bottom/67% 58% no-repeat;
    background: #269af2;
}

.cloud-1 {
    top: 30px;
    left: -100px;
    animation-delay: 0s;
  }

  .cloud-2 {
    top: 80px;
    left: -150px;
    animation-delay: 10s;
  }
  
    .cloud-3 {
      top: 50px;
      left: -200px;
      animation-delay: 5s;
    }
 
     @keyframes moveCloud {
       0% { transform: translateX(0); }
       100% { transform: translateX(120vw); }
     }
  
     /* ⚡ Lightning Flash */
    .lightning {
      position: absolute;
      width: 5px;
      height: 120px;
      background: yellow;
      left: 50%;
      top: 40px;
      transform: translateX(-50%);
      opacity: 0;
      animation: lightning-strike 3s infinite;
    }
  
    @keyframes lightning-strike {
      0%, 97%, 100% { opacity: 0; }
      98% { opacity: 1; }
      99% { opacity: 0.5; }
    }

  .rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.raindrop {
  position: absolute;
  top: -20px;
  width: 2px;
  height: 20px;
  background: rgba(255, 255, 255, 0.6);
  animation: drop 1s linear infinite;
}

@keyframes drop {
  0% {
    transform: translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.snow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -10px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: snowfall 10s linear infinite;
}

@keyframes snowfall {
  0% {
    transform: translateY(-10px) translateX(0);
  }
  100% {
    transform: translateY(100vh) translateX(10vw);
    opacity: 0;
  }
}

.snowflake:nth-child(odd) {
  width: 10px;
  height: 10px;
  animation-duration: 12s;
}

.snowflake:nth-child(even) {
  width: 15px;
  height: 15px;
  animation-duration: 14s;
}

.hail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.hailstone {
  position: absolute;
  top: -20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  animation: hailfall 5s linear infinite;
}

@keyframes hailfall {
  0% {
    transform: translateY(-20px) translateX(0);
  }
  100% {
    transform: translateY(100vh) translateX(5vw);
    opacity: 0;
  }
}

.hailstone:nth-child(odd) {
  width: 15px;
  height: 15px;
  animation-duration: 4s;
}

.hailstone:nth-child(even) {
  width: 25px;
  height: 25px;
  animation-duration: 6s;
}
  
    /* Default fallback */
    .default {
      --cloud: 50%;
    }
  
    .weather-info {
      z-index: 2;
    }
  </style>
  