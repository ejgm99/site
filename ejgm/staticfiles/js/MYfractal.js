let x, y, size;


function setup() {
  var canvas = createCanvas( 1920,  1200);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch');

  background(30, 30, 30);
  size = height/2;
  //drawSquare(width/2, height/2, size);
  drawSquare(width, height/2, size);
  drawSquare2(width-size, height/2-size, size/2)
  drawSquare3(width-size, height/2-size, size/2)
}


function drawSquare(x,y,size){
	noFill();
	stroke(color(255,0,255));
	rect(x, y, size, size);
	if(size>2){
		drawSquare(x,        y - size/2,    size/2);//top
		drawSquare(x-size/2, y+size/2,        size/2); //left
		//drawSquare(x+size,   y,             size/2); //right
		drawSquare(x+size/2, y+size,        size/2); //bottom

	}
}

function drawSquare2(x,y,size){
	noFill();
	stroke(color(0,200,255));
	rect(x, y, size, size);
	if(size>2){
		drawSquare2(x,        y - size/2,    size/2);//top
		//drawSquare2(x-size/2, y+size/2,        size/2); //left
		drawSquare2(x+size,   y,             size/2); //right
		drawSquare2(x+size/2, y+size,        size/2); //bottom

	}
}
function drawSquare3(x,y,size){
	noFill();
	stroke(color(255,200,0));
	rect(x, y, size, size);
	if(size>2){
		//drawSquare2(x,        y - size/2,    size/2);//top
		drawSquare2(x-size/2, y+size/2,        size/2); //left
		drawSquare2(x+size,   y,             size/2); //right
		drawSquare2(x+size/2, y+size,        size/2); //bottom

	}
}