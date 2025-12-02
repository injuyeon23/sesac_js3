const Shape = require('./Shape');

class Square extends Shape { 
    constructor(length) {
        super("Square");
        this.length = length;
    }
    getArea() {
        return this.length ** 2; // this.length * this.length
    }
}

module.exports = Square;