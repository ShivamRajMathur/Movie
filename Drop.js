class Drop{
    constructor(x, y, r){
        var options={
            isStatic : false,
            restitution: 0.5,
            friction:0.1
            }
            this.x = x
            this.y = y
            this.r = r
            this.trajectory = []
            this.body = Bodies.circle(this.x, this.y, this.r, options)
            World.add(world, this.body)
    }
    display(){
      
      var pos =this.body.position;
      var maxDrops = 100
      for(var i=0 ;i<maxDrops; i++){
        //  this.trajectory.push((random(0, 400), random(0, 400)))
        fill("blue");
        ellipse(random(0, 400), random(0,1000),this.r,this.r);  
        } 
        push();
        translate(pos.x, pos.y);
        //rectMode(CENTER);
        strokeWeight(3)
        fill("blue");
     //   ellipse(0,0,this.r, this.r);
        pop();
    }
}
