let bac;
let song;
var button1;
let fb;
//animation
var hatchys = [];
var sims = [];
var michelles = [];
let maxs = [];

//my recomended
let pic1;
let pic2;
let pic3;
let pic4;
let pic5;
let pic6;
let pic7;
let pic8;
let pic9;
let pic10;
let Photo1;
let Photo2;
let Photo3;
let Photo4;
let Photo5;
let Photo6;
let Photo7;
let Photo8;
let Photo9;

function setup() {
  createCanvas(1080, 4000);
  bac = loadImage('background.jpg');
  fb = loadImage('otherimg/facebook.png');
  song = loadSound('Bloxanne.mp3');
  button1 = createButton("mincecraft :)");
  button1.position(100, 15);

  //my recomended
  pic1 = loadImage('wierd/SS1.png');
  pic2 = loadImage('wierd/SS2.png');
  pic3 = loadImage('wierd/SS3.png');
  pic4 = loadImage('wierd/SS4.png');
  pic5 = loadImage('wierd/SS5.png');
  pic6 = loadImage('wierd/SS6.png');
  pic7 = loadImage('wierd/SS7.png');
  pic8 = loadImage('wierd/SS8.png');
  pic9 = loadImage('wierd/SS9.png');
  pic10 = loadImage('wierd/SS10.png');
  photo1 = loadImage('wierd/yt1.png');
  photo2 = loadImage('wierd/yt2.png');
  photo3 = loadImage('wierd/yt3.png');
  photo4 = loadImage('wierd/yt4.png');
  photo5 = loadImage('wierd/yt5.png');
  photo6 = loadImage('wierd/yt6.png');
  photo7 = loadImage('wierd/yt7.png');
  photo8 = loadImage('wierd/yt8.png');
  photo9 = loadImage('wierd/yt9.png');
}

function draw() {
  background(255);
  image(bac, 0, 0);
  image(fb, 0, 0, 200, 150);
  frameRate(12);
  button1.mousePressed(music);

  //my recomended
  image(pic1, 650, 720, 400, 300);
  image(pic2, 650, 1020, 400, 300);
  image(pic3, 650, 1320, 400, 300);
  image(pic4, 650, 1620, 400, 300);
  image(pic5, 650, 1920, 400, 300);
  image(pic6, 650, 2220, 400, 300);
  image(pic7, 650, 2520, 400, 300);
  image(pic8, 650, 2820, 400, 300);
  image(pic9, 650, 3120, 400, 300);
  image(pic10, 650, 3420, 400, 300);
  image(photo1, 0, 720, 650, 360);
  image(photo2, 0, 1080, 650, 360);
  image(photo3, 0, 1440, 650, 360);
  image(photo4, 0, 1800, 650, 360);
  image(photo5, 0, 2160, 650, 360);
  image(photo6, 0, 2520, 650, 360);
  image(photo7, 0, 2880, 650, 360);
  image(photo8, 0, 3240, 650, 360);
  image(photo9, 0, 3600, 650, 360);

  //animation
  image(hatchys[currentImageIndex], 400, 200, 150, 140);
  currentImageIndex++;
  if (currentImageIndex > 12) {
    currentImageIndex = 1
  }
  image(sims[currentImageIndex2], mouseX, mouseY, 100, 250);
  currentImageIndex2++;
  if (currentImageIndex2 > 12) {
    currentImageIndex2 = 1
  }
  image(michelles[currentImageIndex3], 700, 300, 300, 200);
  currentImageIndex3++;
  if (currentImageIndex3 > 8) {
    currentImageIndex3 = 1
  }

  let MaxAnimatoin = random(maxs);
  image(MaxAnimatoin, 50, 550, 90, 70);

}

//music
function music() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

//animation
function preload() {
  for (var i = 1; i < 13; i++) {
    hatchys[i] = loadImage("hatchyA/walk000" + i + ".png");
  }
  for (var l = 1; l < 13; l++) {
    sims[l] = loadImage("simA/walk000" + l + ".png");
  }
  for (var j = 1; j < 9; j++) {
    michelles[j] = loadImage("michelleA/walk000" + j + ".png");
  }

  let max1 = loadImage('puppy/max1.png');
  let max2 = loadImage('puppy/max2.png');
  let max3 = loadImage('puppy/max3.png');
  maxs = [max1, max2, max3];
}

var currentImageIndex = 1
var currentImageIndex2 = 1
var currentImageIndex3 = 1