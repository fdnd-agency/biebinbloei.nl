<style>
  .rain-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .drop {
    position: absolute;
    width: 2px;
    height: 15px;
    background: #6ec6ff;
    bottom: 100%;
    animation: rainFall 0.6s linear infinite;
  }

  .drop:nth-child(odd) {
    animation-delay: 0.2s;
  }

  @keyframes rainFall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
</style>

<div class="rain-container">
  {#each Array(100) as _, i}
    <div class="drop" style="left: {Math.random() * 100}vw; animation-delay: {Math.random() * 2}s;"></div>
  {/each}
</div>
