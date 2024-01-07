let tX;
let tY;
let tiledark = [];
let tilelight = [];
let count;
let bg;

function preload() {
  for (let i = 0; i < 12; i++) {
    tiledark[i] = loadImage(`dark/slice${i}.png`);
  }
  for (let j = 12; j < 24; j++) {
    tilelight[j] = loadImage(`light/slice${j}.png`);
  }
}
function setup() { 
  createCanvas(windowWidth, 4*windowWidth/10);
  frameRate(1);
  bg=createGraphics(width,height);
  count=0;
  ro = 4;
  col = 10;
  cellw = width / col;
  cellh = cellw; 
}
function draw() {
background('white');
  image(bg,0,0);
 bg.background(random(40,100),20,random(150,255)); blendMode(HARD_LIGHT);
  if (frameCount%2==0) {count++;}
  // c is column number, r is row number, t is cell number, m is remainder (to check if even or odd)
  for (let c = 0; c < col; c++) {
    for (let r = 0; r < ro; r++) {
      let t = c + r+count;
      tX = int(random(0,12));
      tY= int(random(12,24));
      if (t%2 == 0) {
      image(tiledark[tX], cellw * c, cellh * r, cellw, cellh);
        bg.noStroke();
        bg.rect(cellw*c,cellh*r,cellw,cellh);
        bg.fill(random(100,200),random(20,80),random(50,100)); 
      } 
      else {
        image(tilelight[tY], cellw * c, cellh * r, cellw, cellh);
      }   
    }
  }

}
function windowResized() {
  resizeCanvas(windowWidth, 4*windowWidth/10);
  redraw();
}
