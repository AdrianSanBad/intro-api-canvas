function drawCuadrado() {
    const canvas = document.getElementById("draw_cuadrado");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgb(50, 100, 50)";//de color verde
      ctx.strokeStyle = "rgb (139,0,139)";//de color morado vivo
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }
  function drawTriangle() {
    const canvas = document.getElementById("draw_triangulo");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.moveTo(50, 100);
      ctx.lineTo(75,50 );
      ctx.lineTo(100, 100);
      ctx.fill();
    }
  }
  
drawCuadrado();
drawTriangle();
