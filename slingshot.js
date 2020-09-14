class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }
    
    attach(bodyA){
        this.chain.bodyA = bodyA;
    }

    display(){
        var pointA = this.chain.bodyA;
        var pointB = this.pointB;
      
        strokeWeight(4);
        stroke("blue");
        line(pointA, pointB); 
    }
    
}

