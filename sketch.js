var ball = {
  x: 20,
  y: 10,
  r: 8 ,
  xspeed: 0,
  yspeed: 0,
  color: ["red","blue","green","pink","purple"],
};



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[0]);
  ball.xspeed = 1;
  ball.x = ball.x + ball.xspeed;

 
}