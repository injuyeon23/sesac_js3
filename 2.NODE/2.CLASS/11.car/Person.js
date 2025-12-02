class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        console.log(`안녕, 나는 ${this.age}살, ${this.gender} ${this.name}이야`);
    }
    getInCar(car) {
        console.log(`난 ${this.name}이고 ${car.model}에 탑승합니다`);
    }
}


module.exports = Person;