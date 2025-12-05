// 신버전을 그냥 이용한다.
// 기존 rquire 문법을 모두다 import from 으로 변경한다.
// 그리고 우리의 package.json 에서 "type":"module" 을 추가한다.

// const { v4: uuidv4 } = require('uuid'); 
// 신버전(uuid v9 이상)에서 이 방식은 작동하지 않음.

// 이 코드는 최신 uuid 패키지를 import 방식으로 사용하기 위해, Node를 ESM 모드로 전환하고 import 문법을 사용하는 코드임.

import { v4 as uuidv4 } from 'uuid';
// “나 이제 ESM(import) 방식 쓸 거야!” 그 설정이 바로 package.json의 "type": "module".

const myid = uuidv4()
console.log('생성된 UUID: ', myid);