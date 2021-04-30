var h,m,s 
var hangle,mangle,sangle 

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
  
}

function draw() {
  background(0); 
  
  translate(250,250);
  rotate(-90)
h=hour ()
m=minute()
s=second()
console.log(h)
hangle=map(h%12,0,12,0,360)
mangle=map(m,0,60,0,360)
sangle=map (s,0,60,0,360)
push ()
rotate (mangle)
stroke("magenta")
line (0,0,180,0)
pop ()
push ()
rotate (sangle)
stroke ("fuchsia")
line (0,0,130,0)  
pop ()
push ()
rotate (hangle)
stroke ("orchid")
line (0,0,90,0)  
pop ()
noFill ()
stroke ("cyan")
arc (0,0,400,400,0,mangle)
stroke ("violet")
arc (0,0,300,300,0,sangle)
stroke ("lightblue")
arc (0,0,200,200,0,hangle)
  drawSprites();
}