// URL을 URL 객체로 변환해서 ‘호스트(사이트 주소)’, ‘경로(path)’, ‘쿼리(query)’를 따로따로 꺼내 쓰는 코드임.

const url = require('url'); // Node.js의 URL 관련 기능 모듈을 가져옴 

const myURL = 'https://www.example.com/api/path?query=value'; // 이건 그냥 문자열 형태의 URL임. 

const urlObj = new URL(myURL);
// 문자열 URL을 분해할 수 있는 객체로 바꾸는 과정임.
// 즉 new URL()을 쓰면 주소가 자동으로 분해되어 저장됨.

console.log("호스트: ", urlObj.host) // host = 사이트 주소 + 포트번호
console.log("경로: ", urlObj.pathname); // pathname = 사이트 내부의 ‘세부 길’ (path)
console.log("쿼리: ", urlObj.search) // search = '?'부터 시작하는 쿼리 문자열 전체

// https://www.example.com/api/path?query=value
// ┌──────────────────────────────────────────────────────────┐
// │ https:// www.example.com / api/path ? query=value        │
// │   ↑           ↑               ↑             ↑            │
// │프로토콜      호스트          경로         쿼리(search)   │
// └──────────────────────────────────────────────────────────┘