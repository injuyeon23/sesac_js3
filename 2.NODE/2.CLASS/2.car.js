// 객체를 생성하다는 의미로 instantiation() 인스탄시에이션 -> 인스턴스 
class Car { //자동차라는 객체 만듦
    brand = "현대";
    model = "K5";
}

const myCar = new Car();
console.log(myCar.brand);
console.log(myCar.model);

const yourCar = new Car();
console.log(yourCar.brand);
console.log(yourCar.model);