function draw() {

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  animate();




  let myRect = [];


  for (var i = 0; i < 40; i++) {
    if (i < 40) {
      myRect.push(new shape());
      console.log(myRect)


    }
  }

  function animate() {
    setInterval(shape, 100); //Sets the loadtime between when a shape is rendered.
  }



  function shape() {

    let red = Math.random() * 255 >> 0;  //Set colors to random
    let green = Math.random() * 255 >> 0;
    let blue = Math.random() * 255 >> 0;
    let color = "rgba(" + red + ", " + green + ", " + blue + ", 0.3)";


    ctx.beginPath();
    ctx.rect(0, 0, Math.floor((Math.random() * 950) + 250), Math.floor((Math.random() * 650) + 250)); //randomise the size of the rectangle
    ctx.fillStyle = color;
    ctx.lineWidth=6;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

  }







}
