const Shape = require('./Shape');

class Star extends Shape { 
    constructor(length) {
        super("Star");
        this.length = length;
    }
    getArea() {
        return this.length * 5 ** 2; 
    }
}

module.exports = Star;