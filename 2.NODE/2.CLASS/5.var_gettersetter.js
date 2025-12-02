//꼭 class만 객체가 아니고, 이렇게 변수 {}한 것도 객체임 
const myVarObject = {
    _age: 10, //Java에는 변수의 접근 권한이 있음, 보통 내부 변수에는 '_'를 붙이는 걸로: 게터/세터와 실제 내부 저장 변수를 구분하기 위해 ‘관례적으로’ _를 붙이는 것임. 

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (newAge > 0 ) {
            this._age = newAge;
        } else {
            console.log("나이는 0보다 커야 합니다.")
        }
    }

}

console.log(myVarObject._age); //private 변수라서 접근은 가능하지만 하지마시오라는 의미
console.log(myVarObject.age); //이렇게 getter함수를 통해서 접근하시오 
myVarObject.age = 20;
console.log(myVarObject.age);
myVarObject.age = -5;


