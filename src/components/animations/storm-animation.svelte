<style>
    .storm-container {
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      pointer-events: none;
    }
  
    .flash {
      width: 100%;
      height: 100%;
      background: white;
      opacity: 0;
      animation: lightningFlash 10s infinite;
    }
  
    @keyframes lightningFlash {
      0%, 97%, 100% { opacity: 0; }
      98% { opacity: 0.6; }
      99% { opacity: 0; }
    }
  </style>
  
  <div class="storm-container">
    <div class="flash"></div>
  </div>
  