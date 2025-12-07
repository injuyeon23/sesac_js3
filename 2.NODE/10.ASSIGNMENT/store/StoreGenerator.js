const StoreBrand = require('./StoreBrand');
const StoreLocation = require('./StoreLocation');

class StoreGenerator {
    constructor() {
        this.brandGen = new StoreBrand();
        this.locationGen = new StoreLocation();
    }

    generate() {
        const brand = this.brandGen.generate();
        const location = this.locationGen.generate();

        return `${brand} ${location}점`;
    }
}

module.exports = StoreGenerator;

const gen2 = new StoreGenerator();
console.log(gen2.generate());