let tX;
let tY;
let tiledark = [];
let tilelight = [];
let count=0;
function preload() {
  for (let i = 0; i < 12; i++) {
    tiledark[i] = loadImage(`dark/slice${i}.png`);
  }
  for (let j = 12; j < 24; j++) {
    tilelight[j] = loadImage(`light/slice${j}.png`);
  }
}
function setup() {
  createCanvas(600, 900);
  frameRate(1);
  ro = 8;
  col = 6;
  cellw = width / col;
  cellh = cellw;
}
function draw() {
 background(255,20,random(255));
  if (frameCount%2==0) {count++;}

  // c is column number, r is row number, t is cell number, m is remainder (to check if even or odd)
  for (let c = 0; c < col; c++) {
    for (let r = 0; r < ro; r++) {
      let t = c + r+count;
      tX = int(random(0,12));
      tY= int(random(12,24));
      if (t%2 == 0) {
       
       image(tiledark[tX], cellw * c, cellh * r, cellw, cellh);
        
      } 
      else {
        image(tilelight[tY], cellw * c, cellh * r, cellw, cellh);
       
      }
  }
  }

}
