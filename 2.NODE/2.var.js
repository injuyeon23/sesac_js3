let = a;
const pi =3.14;

a = 20;

a = 30;

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 변수의 스코프 
let globalA = 50; // 전역 변수 

function myFunction() {
    let localA = 30; //로컬 변수 

    console.log(globalA);
    console.log(localA);
}

myFunction();
    console.log(globalA);
    console.log(localA);
