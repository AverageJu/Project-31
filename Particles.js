Class Particles {
    constructor(x,y,r){
        var options = {
            restitution:0.4
        }
        this.r=r;

        this.body=Bodies.circle(x,y.this.r,options); 
        this.color=color(random(0,255),random(0,255),random(0,255));
        world.add(world,this.body);

        for(var j = 0; j<particles.length; j++){

            particles[j].display();
        }
        for(var k = 0; k<divisions.lenth; k++){

            divisions[k].display();
        }
    }
            display();
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            //imagineMode(CENTER);
            noStroke();
            fill(this.color);
            eclipseMode(RADIUS);
            eclipse(0,0,this.r,this.r);
            
}