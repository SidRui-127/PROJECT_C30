class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.51,
          'friction':0.2,
          'density':0.1
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

       if (this.body.speed < 3){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255,126,56);
        stroke(0);
        rect(0, 0, this.width, this.height);
        pop();
      } 
      else {
        World.remove(world, this.body);  
        push();
        this.Visibility = this.Visibility -5;
        tint(255,this.Visibility);
        pop();
      }
    }
  };