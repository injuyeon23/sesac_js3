// readline-sync는 입력을 "기다렸다가" 받는 동기식 입력 라이브러리라서, 코드가 위에서 아래로 순서대로 100% 그대로 실행됨.
const readline = require('readline-sync');
// readline(비동기 입력) 과 다르게, "readline-sync"라는 라이브러리로 동기 방식 입력을 받는 코드

rl = readline;

console.log('여기1');

// rl 이라는 변수를 통해서 키보드 입출력이 가능해졌음
const input = rl.question("원하는 단을 입력하시오: ");
console.log('입력값: ', input);

console.log('여기2');

// 안타깝게도.. 유니코드를 제대로 지원 못하는 경우들이 많음...
// 윈도우의 터미널을 한시적으로 chcp 65001