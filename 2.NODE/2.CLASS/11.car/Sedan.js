const Car = require('./Car');

class Sedan extends Car {
    constructor(brand, model, color) {
        super(brand, model)
        this.color = color;
    }
    
    say() {
        console.log(`${this.brand}, ${this.model}은 ${this.color}색입니다`)
    }
    autoPilot() {
        if (this.autopilot == true)  {
            console.log(`${this.brand}의 자율주행 시작합니다`)
        } else {
            console.log(`자율주행 옵션이 없습니다`)
        }
    }
}

module.export = Sedan;