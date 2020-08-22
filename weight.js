class Weights{
    constructor(x, y){
        // physics properties given to it
        var options = {
            restitution: 1,
            friction: 1,
            density: 1.2
            }
            // creation
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        // adding it to the world
        World.add(world, this.body);
    }
    // displaying
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill("indigo");
    ellipse(pos.x, pos.y, this.radius);
}
}