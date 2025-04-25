<style>
    .fog-container {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
  
    .fog {
      position: absolute;
      width: 200%;
      height: 100%;
      background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
      animation: drift 60s linear infinite;
    }
  
    .fog:nth-child(2) { top: 20%; animation-duration: 90s; opacity: 0.4; }
    .fog:nth-child(3) { top: 40%; animation-duration: 120s; opacity: 0.3; }
  
    @keyframes drift {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
  </style>
  
  <div class="fog-container">
    <div class="fog"></div>
    <div class="fog"></div>
    <div class="fog"></div>
  </div>