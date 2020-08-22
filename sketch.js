// all of our Matter variables 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
// All of our personalized vasriables
var ball1, ball2, ball3, ball4, ball5, ball6;
var brick2;
var slingshot, slingshot2, slingshot3, slingshot4, slingshot5, slingshot6;

function setup() {
	// It is the house of bodies
	createCanvas(1400, 700);

	// this is the room of engine and world
	engine = Engine.create();
	world = engine.world;

	// this is the room of bobs where they are nicknamed 
	// as balls
	ball1 = new Weights(500, 680);
	ball2 = new Weights(600, 680);
	ball3 = new Weights(700, 680);
	ball4 = new Weights(800, 680);
	ball5 = new Weights(900, 680);
	ball6 = new Weights(1000, 680);

	// the room of the log they are attached with
	brick2 = new logs(700, 100, 600, 40);

	// the room where slingshot lies 
	slingshot = new SlingShot(ball1.body, brick2.body, -250, 0);
	slingshot2 = new SlingShot(ball2.body, brick2.body, -150, 0);
	slingshot3 = new SlingShot(ball3.body, brick2.body, -50, 0);
	slingshot4 = new SlingShot(ball4.body, brick2.body, 50, 0);
	slingshot5 = new SlingShot(ball5.body, brick2.body, 150, 0);
	slingshot6 = new SlingShot(ball6.body, brick2.body, 250, 0);

}


function draw() {
  background("black");
  Engine.update(engine);
//   the place of work where everybody diplay itself
  slingshot.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  slingshot5.display();
  slingshot6.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();

  brick2.display();

//   text for refference of users
  textSize(40);
  text("Press A or Left arrow key to move the far left bob", 300, 500)
  text("Press L or Right arrow key to move the far right bob", 300, 550)

}

// the keypressed functions
function keyPressed(){
	// it means the if key Left or A is pressed the bob will apply
	// force in the direction given to it
    if (keyCode == 65 || keyCode == 37) {
        Body.applyForce(ball1.body, ball1.body.position, {x:-550, y:0});
	}
	// it means the if key Right or L is pressed the bob will apply
	// force in the direction given to it
    if (keyCode == 76 || keyCode == 39) {
        Body.applyForce(ball6.body, ball6.body.position, {x:550, y:0});
    }

}