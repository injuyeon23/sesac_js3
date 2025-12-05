// 이 코드는 example.com 사이트로 HTTP 요청을 보내고, 서버가 보내주는 응답(상태코드·데이터)을 받아서 콘솔에 출력하는 코드임.
const http = require('http'); // HTTP 요청과 응답을 다루는 도구 가져와!

// const url = 'http://www.example.com/path/test.html'
const url = 'http://www.example.com/'

const req = http.request(url, (res) => { // 요청 객체(req)
    console.log('요청끝: 상태코드: ', res.statusCode);
    // statusCode는 HTTP 응답코드: 200 → 성공 404 → 파일 없음 500 → 서버 내부 오류

    res.on('data', (chunk) => { // res는 서버가 보내온 응답 객체.
        console.log('데이터 수신: ', chunk); // chunk에는 example.com이 보내온 HTML 코드 일부가 들어 있음.
    });
});

req.on('error', (error) => { // 인터넷이 끊기거나, 주소가 잘못되면 실행됨.
    console.log('오류발생');
});

req.end(); // 말은 end인데, 이놈이 시작을 해줌...

// 이제 진짜 요청을 서버로 보내는 순간.
// req.end()를 호출해야만
// → 서버로 요청이 날아가고
// → 응답(res)이 도착함.

// 내 Node 프로그램
//      │
//      ├─ http.request(url) → 요청 준비
//      │
//      ├─ req.end()  → 서버로 요청 전송!
//      │
//      ▼
// example.com 서버
//      │
//      ├─ 응답 상태코드 (200)
//      ├─ HTML 조각(chunk)
//      ├─ 더 많은 chunk…
//      │
//      ▼
// 내 Node 프로그램
//      │
//      ├─ "요청끝: 상태코드: 200"
//      ├─ "데이터 수신: <Buffer ...>"
//      └─ (모든 데이터 수신 완료)