const Person = require('./Person');


class Student {
    constructor(name, age, gender, job) {
        super(name, age, gender);
        this.job = job;
    }
    
    getInCar(car) {
        console.log(`${this.name}이 아버지 차를 탑니다`)
    }
}