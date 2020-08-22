class SlingShot{
    // setting some offsets
    constructor(body1, body2, offsetX, offsetY){
    // variable created 
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    // pysics properties given to it
    var options = {
        bodyA:body1,
        bodyB:body2,
        stiffness:0.04,
        length:300,
        pointB:{
            x:this.offsetX, 
            y:this.offsetY
        }
    }

    // creation
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
}

// displaying
display(){

    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;

    var anchorBx = pointB.x + this.offsetX;
    var anchorBy = pointB.y + this.offsetY;

    fill("red");
    stroke("red")
    strokeWeight(4);
    line(pointA.x, pointA.y, anchorBx, anchorBy);
}
}