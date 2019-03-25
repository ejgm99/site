let c1_x, c1_y, c2_x,c2_y, f,
     e, e0, p, i, d, p_k, d_k, i_k, total_e,
     sampleRate, c0,
    distanceLen, currentMove, tracker;

var distances = [];


function setup() {
  createCanvas(1280,  622);
  // Starts in the middle
  d  = 0;
  e0 = 0;
  e = 0;
  c0 = 0;
  c1_x = width / 2;
  c1_y = 0;
  c2_x = width/2;
  c2_y = height/2;
  distanceLen = 0;
  speed = 10;
  total_e =0;
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
  text("currentMove:         " + currentMove, 40, 60);
  text("distanceLen:         " + distanceLen, 40, 50);
  text("Current Y:           " + c1_y, 40, 70);
  text("Tracker:             " + tracker, 40, 80);
  text("Current bound:       " +int(distances[currentMove]),40,90);
  text("Proportional Action: " + p, 40,100);
  text("Derivative Action:   " + d, 40,110);
  text("Integral Action:     " + i, 40,120);
  text("Speed:               " +speed, 40, 130)
  text("PID Controller", width/4,height/2)
  drawC2();
  drawC1();
  //if(currentMove ==distanceLen){
    PID();
  //}
  if( currentMove < distanceLen ){ 
    moveC1(); 
  }
  //moveC1();
  // Draw a circle
  // stroke(50);
  // fill(c1_y);
  // ellipse(c1_x, c1_y, 30*Math.sin(c1_y/100), 30*Math.cos(c1_y/100));
  
  // Jiggling randomlc1_y on the horizontal ac1_xis
  //c1_x = c1_x + random(-1, 1);
  // Moving up at a constant speed
  //c1_y = c1_y - 1;
  // f = f+1
  // // Reset to the bottom
  // if (c1_y < 0) {
  //   c1_y = height;
  // }
}


function drawC2(){
  stroke(50);
  fill(0);
  ellipse(c2_x,c2_y, 30,30);

}

function drawC1(){
    stroke(50);
    fill(300);
    ellipse(c1_x, c1_y,30,30); //30*Math.sin(c1_y/100), 30*Math.cos(c1_y/100));
}

function addDistance(d){
  distances[distanceLen] = d;
  distanceLen++;
}

function PID(){

    calculateError();
    proportionAction();
    derivativeAction();
    integralAction();
    speed = ((p+i+d)/10)+5;
}

function calculateError(){
  e0 = e;
  e = c2_y-c1_y;

}

function proportionAction(){
  p = p_k*e;
  addDistance(p);
}

function derivativeAction(){
  d = d_k*(c1_y - c0);
  c0 = 0;
  addDistance(d);
}

function integralAction(){
  total_e = (total_e+e)/(distanceLen/3);
  i = i_k*total_e;
  addDistance(i);
}


function moveC1(){
  if(currentMove<distanceLen){
  if(Math.abs(tracker) <Math.abs(int(distances[currentMove]))){

    if(distances[currentMove]>0){
      c1_y = c1_y+speed;
      tracker= tracker+speed;
    }
    if(distances[currentMove]<0){
      c1_y = c1_y-speed;
      tracker = tracker-speed;
    }

  }

  else{
    tracker=0;
    currentMove++;
  }
}
}
