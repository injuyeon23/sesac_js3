const Person = require('./Person');


class Parent {
    constructor(name, age, gender, job) {
        super(name, age, gender);
        this.job = job;
    }
    
    getInCar(car) {
        console.log(``)
    }
}
module.exports = Parent;