<style>
    .sun {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, #FFD700 60%, rgba(255, 215, 0, 0.3) 80%);
      border-radius: 50%;
      box-shadow: 0 0 40px 20px rgba(255, 223, 0, 0.5);
      animation: pulse 3s ease-in-out infinite;
    }
  
    @keyframes pulse {
      0%, 100% { transform: translateX(-50%) scale(1); }
      50% { transform: translateX(-50%) scale(1.1); }
    }
  </style>
  
  <div class="sun"></div>
  