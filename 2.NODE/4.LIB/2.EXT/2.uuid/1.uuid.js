// uuid 모듈의 v4 버전을 사용해서, 랜덤으로 절대 겹치지 않는 고유 ID를 하나 생성하는 코드임.

// npm install uuid@8 < 설치하면 node_modules에 uuid가 들어오고 require로 불러올 수 있게 됨.
// UUID(Universally Unique ID) ― 즉 전 세계에서 절대 중복되지 않는 랜덤 아이디를 생성하는 예제야.

const { v4: uuidv4 } = require('uuid'); // "uuid 모듈에서 v4 함수만 꺼내서 uuidv4라는 이름으로 쓰겠다" => 구조 분해 할당(Destructuring)”
// 아래는 기본 버전 
// const uuid = require('uuid');
// const uuidv4 = uuid.v4;

const myid = uuidv4() // ID 생성
console.log('생성된 UUID: ', myid); 