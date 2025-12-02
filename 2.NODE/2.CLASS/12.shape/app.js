const Square = require('./Square');
const Triangle = require('./Triangle');
const Trapezium = require('./Trapezium');
const Circle = require('./Star');

const square = new Square(5); //한변의 길이 
const triangle = new Triangle(4, 3); //밑변, 높이 
const trapezium = new Trapezium(4, 6, 5); //윗변, 아랫변, 높이 
const circle = new Circle(5); //반지름 
const star = new Star(5); 


console.log('사각형의 넓이:', square.getArea()); //25
console.log('사각형의 넓이:', triangle.getArea()); // 6
console.log('사다리꼴의 넓이:', trapezium.getArea()); // 25
console.log('원의 넓이:', circle.getArea()); //28.27 
console.log('별의 넓이:', star.getArea()); 

