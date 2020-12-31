class Bird {
    constructor(x, y) {
        this.width = 50;
        this.height = 50;

        var options = {
            restitution: 1,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        World.add(world, this.body)

    }
    display() {
        rectMode(CENTER)

        var pos = this.body.position // namespacing
        pos.x = mouseX
        pos.y = mouseY
        var angle = this.body.angle
        push();
        stroke("red")
        strokeWeight(3)
        translate(pos.x, pos.y)
        rotate(angle)
        rect(0, 0, this.width, this.height)

    }
}