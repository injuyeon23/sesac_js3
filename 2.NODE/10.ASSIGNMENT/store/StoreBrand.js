const GeneratorBase = require('../GeneratorBase');

class StoreBrand extends GeneratorBase {
    constructor() {
        super();
        this.brands = ["나이키", "아디다스", "뉴발란스", "휠라", "퓨마"];
    }

    generate() {
        const brandIdx = Math.floor(Math.random() * this.brands.length);
        return this.brands[brandIdx];
    }
}

module.exports = StoreBrand;
