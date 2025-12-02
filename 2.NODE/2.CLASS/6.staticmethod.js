// static 생겨난 배경: 객체의 목적이 하나를 만들어서 계속 쓰자는 거 굳이 나만의 객체 즉 복제본을 만들어야 할까? 
// static으로 정의된 변수나 함수는 굳이 instance를 만들어서 접근하지 않고 바로 해당 객체로부터 접근

class MathOps {
    static PI = 3.141592;
    static add(x,y) {
        return x + y;
    }

    static subtract(x,y) {
        return x - y;
    }
}
const myMath = MathOps.PI; //static의 목적은 복제본없이 바로 호출하기 위해서 
console.log(MathOps);
console.log(MathOps.add(2,5));
console.log(MathOps.subtract(2,5));