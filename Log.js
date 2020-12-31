class Log {
    constructor(x, y, height, angle) {
        this.width = 20;
        this.height = height;

        var options = {
            restitution: 1,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, this.width, height, options)
        World.add(world, this.body)
        Matter
            .Body
            .setAngle(this.body, angle)
    }
    display() {
        rectMode(CENTER)

        var pos = this.body.position // namespacing
        var angle = this.body.angle
        push();
        stroke("brown")
        strokeWeight(3)
        translate(pos.x, pos.y)
        rotate(angle)
        rect(0, 0, this.width, this.height)
        pop();
    }
}
