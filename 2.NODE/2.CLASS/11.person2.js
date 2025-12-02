class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`안녕하세요 저는 ${this.age}살 ${this.name}입니다.`)
    }

    walk() {
        console.log(`${this.name}은 걷고 있습니다.`)
    }


    }

    class Employee extends Person {
        constructor(name, age, gender, jobTitle, salary) {
            super(name, age, gender,jobTitle, salary) 
                this.jobTitle = jobTitle;
                this.salary = salary;
            }
        
        work() {
            console.log(`${this.name}은 ${this.jobTitle}으로 일하고 있습니다.`)
        }

    }

    const person1 = new Person("철수", 25, "남성");
    const employee1 = new Employee("영희", 22, "여성", "소프트웨어개발자", 3000);

    person1.greet();
    person1.walk();
    employee1.greet();
    employee1.walk();
    employee1.work();


    class Student extends Person {
        constructor(name, age, gender, studentId, major) {
            super(name, age, gender);
            this.studentId = studentId;
            this.major = major;
        }
        study() {
            console.log(`${this.name}이 전공인 ${this.major}를 열심히 공부하고 있습니다.`);
        }
    }

const student1 = new Student("아이유", 23, "여성", "", "국어국문학과");
student1.greet();
student1.walk();
student1.study();
// student1.work(); <- 오류가 떠버림 

