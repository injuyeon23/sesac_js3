const Shape = require('./Shape');

class Triangle extends Shape { 
    constructor(side, height) {
        super("Triangle");
        this.side = side;
        this.height = height;
    }
    getArea() {
        return this.side * this.height * 0.5;
    }
}

module.exports = Triangle;