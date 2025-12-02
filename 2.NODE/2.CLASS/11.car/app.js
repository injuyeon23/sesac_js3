// 자동차를 상속받은 Sedan, SUV

const SUV = repuire('./SUV');
const Sedan = repuire('./Sedan');
const Car = repuire('./Car');

const dadCar = new SUV('테슬라', 'Model X', false);
dadCar.autopilot(); 




// Person을 상속받아서 parent, Child가 있음 

const Parent = require('./Parent');
const Parent = require('./Child');


const dad = new Parent('빌게이츠', 40, '남성', '회사원');
const son = new Child('주니어빌', 20, '남성', '대학생');


//사람이 차를 타는 함수 구현 
dad.getInCar(dadCar); // 빌게이츠가 테슬라 무슨 모델을 탑니다 
son.getInCar(dadCar); // 주니어빌이 테슬라 무슨 모델을 탑니다 



//차에 움직이는 함수 구현 
// dadCar.start();
// dad.autopilot('미술관');
// son.playInCar();
// dadCar.stop();