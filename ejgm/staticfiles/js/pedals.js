let x,y;

function setup() {
  // put setup code here
  let canvas = createCanvas(1280,  622);
  x = 0;
  circleStep();
}

function draw() {
	//text(x,width/2, height/2);
}

//circle is x^2+y^2 = r^2
function circleStep(){
	for(var y = -1000; y<1000;y++){
		x = Math.sqrt(2500-(y*y));
		fill(color(255,0,0));
		point(x+(width/2) , y+(height/2));
		fill(color(255,128,0));
		point((width/2)-x , (height/2)-y);

	}
}

function polygonFromLine(x1,y1, x2,y2, sides){
	let angle = TWO_PI/sides;
	beginShape();
	for ()
}


function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
