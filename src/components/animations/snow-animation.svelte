<style>
    .snow-container {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  
    .flake {
      position: absolute;
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
      opacity: 0.8;
      animation: fall 10s linear infinite;
    }
  
    @keyframes fall {
      0% { transform: translateY(0); }
      100% { transform: translateY(100vh); }
    }
  </style>
  
  <div class="snow-container">
    {#each Array(50) as _, i}
      <div
        class="flake"
        style="
          left: {Math.random() * 100}vw;
          animation-delay: {Math.random() * 5}s;
          animation-duration: {8 + Math.random() * 4}s;
        ">
      </div>
    {/each}
  </div>
  