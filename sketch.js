var vertices = [];

function setup() {
  createCanvas(640, 360);
  
}

function mousePressed() {
  var v = createVector(mouseX, mouseY);
    vertices.push(v);
}

function draw(){
    background(51);
    
    for(var i =0;  i < vertices.length; i ++){
        fill(255);
        stroke(255);
        ellipse(vertices[i].x, vertices[i].y , 16, 16);
    }
}