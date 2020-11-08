let hauteur = 20;
let grandir = 6;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(20);
  rotateY(10);
  normalMaterial();
  box(70, 70, hauteur);
  if(hauteur > 200) {
    grandir = -2;
  } 
  if(hauteur < 20) {
    grandir = 6;
  }
  hauteur += grandir;
}