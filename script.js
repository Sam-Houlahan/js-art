function draw() {
  let topPosition = 0;
  let leftposition = 0;
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;






let myRect = [];


for (var i = 0; i < 20; i++) {
  if (i <100){
  myRect.push(new shape());
  console.log(myRect);
}
}



function shape(){

  let red = Math.random() * 255 >> 0;
  let green = Math.random() * 255 >> 0;
  let blue = Math.random() * 255 >> 0;
  let color = "rgba(" + red + ", " + green + ", " + blue + ", 0.5)";
  ctx.beginPath();
  ctx.rect(100, 150, Math.floor((Math.random() * 250) + 250), Math.floor((Math.random() * 250) + 250));
  ctx.fillStyle = color;

  ctx.fill();
  ctx.stroke();

  ctx.closePath();

}





}
