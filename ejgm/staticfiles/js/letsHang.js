let x;

var distances = [];


function setup() {
  createCanvas(1280,  622);
  // Starts in the middle
  x = 0;
  y = 0;
  // addDistance(height/2);
  // addDistance((height/4)*-1);
  // addDistance((height/8));
  p_k = 1.5;
  d_k =0;
  i_k = 0;
  tracker = 0;
  currentMove = 0;
}

function draw() {
  background(100);
  fill("cyan");
  text(" please don't say nigger ", x, y);
  fill("magenta");
  text(" my mom checks my phone ", width -x, 200);
  if(x>width+20){
    x = 0;
  }
  if(y>width+20){
    y = 0;
  }
  x = x +1;
  y = y+1;
}

