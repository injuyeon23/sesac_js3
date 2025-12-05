// readline 모듈로 키보드 입력을 받는 인터페이스를 만들고, 사용자에게 질문 → 입력을 받아 → 출력하는 코드임.

const readline = require('readline');
// Node.js 내장 모듈인 readline 가져오기. 이 모듈은 키보드 입력을 받는 용도로 사용됨.

const rl = readline.createInterface({  // 인터페이스 생성
    input: process.stdin, // 표준입출력 (키보드 입력, 0): 사용자가 터미널에서 키보드로 입력하는 흐름(입력 스트림)
    output: process.stdout, // 표준입출력 (콘솔/화면 출력, 1): 터미널에 출력하는 흐름(출력 스트림)
    // 이 둘을 조합해서 “readline 인터페이스”를 만들면 읽기/쓰기(입출력)가 가능한 rl 객체가 생김.
});

// rl 이라는 변수를 통해서 키보드 입출력이 가능해졌음
rl.question("아무 입력이나 받아볼까?", (input) => { // rl.question(질문, 콜백함수)
    console.log('입력값: ', input);
    rl.close();
});

// 프로그램 시작
//     │
//     ▼
// readline 인터페이스 생성 (키보드 연결됨)
//     │
//     ▼
// 터미널에 질문 출력: "아무 입력이나 받아볼까?"
//     │
// (사용자 입력 기다림)
//     │
//     ▼
// 사용자 입력 도착 → input 변수로 전달됨
//     │
//     ▼
// console.log('입력값:', input)
//     │
//     ▼
// rl.close() → 인터페이스 종료