const GeneratorBase = require('../GeneratorBase');

class StoreLocation extends GeneratorBase {
    constructor() {
        super();
        this.locations = ["강남", "홍대", "신촌", "부산", "대구", "광주", "인천"];
    }

    generate() {
        const idx = Math.floor(Math.random() * this.locations.length);
        return this.locations[idx];
    }
}

module.exports = StoreLocation;