class Box {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        var options = {
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)

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