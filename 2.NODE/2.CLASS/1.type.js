const a = 5;
console.log(typeof a);

const b = "hello";
console.log(typeof b); //원시타입


//문자, 숫자 등 내가 원하는 기능들을 넣기 위해 Wrapper Class = Object 타입 

const c = new Number(5); //객체는 빵틀, new Nuber() 이 객체를 통해 넘버를 찍어낸다(빵을 찍어낸다)
const d = new Number(7); //객체는 빵틀, new Nuber() 이 객체를 통해 넘버를 찍어낸다(빵을 찍어낸다)
console.log(typeof c); // 확장된 넘버타입
console.log(c instanceof Number);
console.log(d instanceof Number);

const e = new String("hello"); //확장된 문자타입
const f = new String("World"); //확장된 문자타입
console.log(typeof e);
console.log(typeof f);
