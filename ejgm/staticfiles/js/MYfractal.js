let x, y, size;


function setup() {
  var canvas = createCanvas( 1000,  1000);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch');

  background(0, 0, 0);
  size = 500;
  drawSquare(width/2+200, height/2, size);

}


function drawSquare(x,y,size){
	noFill();
	stroke(color(255,0,255));
	rect(x, y, size, size);
	if(size>1){
		drawSquare(x,        y - size/2,    size/2);//top
		drawSquare(x-size/2, y+size/2,        size/2); //left
		//drawSquare(x+size,   y,             size/2); //right
		drawSquare(x+size/2, y+size,        size/2); //bottom

	}
}