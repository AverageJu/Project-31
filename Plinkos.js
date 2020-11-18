class Plinkos {
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        world.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }

    for (var j = 40; j<=width ; j=j+50){
        Plinkos.push(new Plinkos(j,75));

    }
    for (var j = 15; j<width-10;j+50){
        Plinkos.push(new Plinkos(j,175));

    }

}