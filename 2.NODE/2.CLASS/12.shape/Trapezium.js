const Shape = require('./Shape');

class Trapezium extends Shape { 
    constructor(upside, downside, height) {
        super("Trapezium");
        this.upside = upside;
        this.downside = downside;
        this.height = height;
    }
    getArea() {
        return ((this.upside + this.downside)* this.height) / 2; 
    }
}

module.exports = Trapezium;