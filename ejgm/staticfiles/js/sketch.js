
let i =0;

function setup() {
  var canvas = createCanvas(1280,  622);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch');

  background(0, 0, 200);
}

function draw(){
	background(color(i++,0,200));
	if(i>200){
		i = 0;
	}
	noFill();
	noLoop();
	Racaman(100);
}


function Racaman(len){ //generates Racaman sequence along number line given a number of points
  var numberline = [];
  var distance;
  distance = numberLine(len);

  var size =1;
  var position = 0;
  var o = 1;
  while(position<=(len+50)){
    o = o*-1;
    if(position-size>0 && !line[position-size]){
      pointArc(position*distance,(position-size)*distance,windowHeight/2,o)
      position = position-size;
      line[position]=true;
    }
    else{
      pointArc(position*distance,(position+size)*distance,windowHeight/2,o)
      position = position+size;
      line[position]=true;
    }
    size++;

  }
} 

function pointArc(x1,x2,y,orientation){ //draws arc from one point in x-space to other point, maintining y
  var d;
  if (x1>x2){//swap
    d = x2;
    x2 = x1;
    x1 = d;
  }
  d = Math.abs(x2-x1);
  x = x1 + (d/2.0)
  if(orientation==1){
    arc(x, y, d, d, 0, PI);
  }
  else{
    arc(x, y, d, d, PI, TWO_PI);
  }
}


function numberLine(len){//draws numberline in middle of screen
  // for(var i = 0; i<windowWidth; i=i+windowWidth/len){
  //   ellipse(i, windowHeight/2,6,6);
  // }
  return windowWidth/len;
}