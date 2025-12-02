const Person = require('./Person');

class Employee extends Person {
    constructor(name, company) {
        super(name);    
        this.company = company;
    }
    greet() {
        console.log(`나는 ${this.name}이고 ${this.company}에서 일하고 있어`);
    }
}
module.exports = Employee; // 이 파일(Employee.js) 바깥으로 "Employee를 외부에 공개" / export = 보내기

// app.js에 있는 "require('./Employee')"는 외부로 공개된 Employee를 "불러오는 함수" / require = 받아오기


