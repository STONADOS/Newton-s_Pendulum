class logs{
    constructor(x,y,w,h){
        // pysics properties given to it
    var options = {
        isStatic:true
    }
    // creation
    this.body = Bodies.rectangle(x,y,w,h, options);
    this.width = w;
    this.height = h;
    World.add(world, this.body);
    }
    // displaying
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("black");
    stroke("purple")
    rect(pos.x, pos.y, this.width, this.height);
}
}