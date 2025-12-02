const Shape = require('./Shape');

const PI = 3.14

class Circle extends Shape { 
    constructor(radius) {
        super("Circle")
        this.radius = radius;
    }
    getArea() {
        return PI * this.radius ** 2; 
        //

    }
}

module.exports = Circle;