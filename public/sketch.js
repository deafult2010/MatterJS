// module aliases
var Engine = Matter.Engine,
  //   Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  };
  ground = Bodies.rectangle(200, height - 50, width, 60, options);
  World.add(world, ground);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke();
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 60);
}
