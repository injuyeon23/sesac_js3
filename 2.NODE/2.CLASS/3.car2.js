// 객체를 생성하다는 의미로 instantiation() 인스탄시에이션 -> 인스턴스 
class Car { //자동차라는 객체 만듦
    constructor(brand, model) { //객체가 만들어질 때 불리는 기본함수 
        this.brand = brand;
        this.model = model;
    }

    welcome() {
        return this.brand + " " + this.model + " 입니다."
    }
    drive() {
        return `${this.brand} ${this.model}이 자동운전을 시작합니다.`
    }
}

const myCar = new Car("현대", "K5");
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.welcome());
console.log(myCar.drive());

const yourCar = new Car("기아", "모닝");
console.log(yourCar.brand);
console.log(yourCar.model);
console.log(yourCar.welcome());
console.log(yourCar.drive());