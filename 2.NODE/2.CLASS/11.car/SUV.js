const Car = require('./Car');

class SUV extends Car {
    constructor(brand, model, locate, ) {
        super(brand);
        super(model);
        this.locate = locate; 
    }
    locate() {
        console.log(`${this.brand}의 ${this.model}은 ${this.locate}로 가는 중입니다`)
} 
}
module.exports = SUV;

