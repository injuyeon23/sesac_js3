// example.com 서버에 요청을 보내고, 서버가 보내준 “상태코드 + 헤더 + 내용(body)”를 모두 출력하는 코드임.

const http = require('http'); // Node.js의 HTTP 기능을 가져오는 코드.

// const url = 'http://www.example.com/path/test.html'
const url = 'http://www.example.com/'

const req = http.request(url, (res) => { // res → example.com 서버가 보내준 "응답 객체"
    console.log('STATUS:', res.statusCode); // 서버가 보내온 HTTP 상태코드를 출력

    console.log('HEADERS: ', res.headers); // 서버가 “추가 정보”를 담아서 보내는 부분. (그냥 JS 객체 형태로 출력)
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`); // JSON 문자열로 변환해서 출력, (좀 더 한 줄로 깔끔하게 보려고)
    
    res.setEncoding('utf8'); // 서버에서 보내온 데이터를 utf-8 문자열로 변환해주는 것.
    res.on('data', (chunk) => { // HTTP 응답의 본문(body)은 한 번에 오지 않고 여러 조각(chunk) 으로 나눠져서 옴.
        console.log(`BODY: ${chunk}`);
    });
});

req.on('error', (error) => { // URL이 잘못되었거나, 인터넷 연결 문제 등이 생기면 실행됨.
    console.log('오류발생');
});

req.end(); // 말은 end인데, 이놈이 시작을 해줌...

// 내 Node 코드
//    │
//    ├── http.request(url) → 요청 준비
//    │
//    ├── req.end() → 요청 전송
//    ▼
// example.com 서버
//    │
//    ├── STATUS: 200
//    ├── HEADERS: {...}
//    ├── BODY 조각1
//    ├── BODY 조각2
//    ├── BODY 조각3
//    │
//    └── (모든 응답 완료)