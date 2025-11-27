let person = {
    name: "Alice",
    age: 23,
    job: "백수"
}

console.log(person);
console.log(typeof person)

let car = {
    brand: "현대",
    year: 2020,
    name: "K5",
    start: function() {
        return "부르릉"
    },
    end: function() {
        return "..."
    },
    open: function() {
        return "문을 열었습니다."
    }
}

console.log(car.brand);
console.log(car.start());
console.log(`${car.brand} ${car.name}의 시동을 걸었더니 : ${car.start}의 소리가 납니다`);