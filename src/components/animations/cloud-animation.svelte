<style>
    .clouds-container {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  
    .cloud {
      position: absolute;
      width: 200px;
      height: 100px;
      background: #ffffffaa;
      border-radius: 50%;
      filter: blur(10px);
      animation: cloudMove 60s linear infinite;
    }
  
    .cloud:nth-child(2) { top: 20%; left: -200px; animation-delay: 10s; }
    .cloud:nth-child(3) { top: 40%; left: -300px; animation-delay: 30s; }
  
    @keyframes cloudMove {
      0% { transform: translateX(0); }
      100% { transform: translateX(150vw); }
    }
  </style>
  
  <div class="clouds-container">
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
  </div>
  