// 8000번 포트에서 기다리다가 → 요청 오면 index2.html 파일을 읽어서 → 그 파일 내용을 그대로 브라우저에 보내주는 코드.

const fs = require('fs'); // 파일 읽기/쓰기 도와주는 모듈
const http = require('http'); // 웹서버 만드는 모듈 

const server = http.createServer(); // 서버 기계 하나 만들었다는 뜻, 아직 문은 닫혀 있음(listen 전)

// 서버가 8000 을 열고 기다린다.
// 사용자의 요청이 오면, 파일을 열어서
// 그 내용을 전달한다.

server.on('request', (req, res) => {  // 1줄로 요청 받고, http://localhost:8000로 접속하면 실행됨.
    console.log('HTTP 요청이 시작되었습니다.');
    // 파일을 읽는다.

    fs.readFile('index2.html', 'utf8', (err, data) => { // 1줄로 파일 읽고 서버가 index2.html 파일을 열어서 그 내용을 읽는다
        // 파일이 있으면 → data 안에 문자열로 들어감, 파일이 없거나 에러 → err 발생
        if (err) {
            console.log("파일 읽기 실패");
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' }); 
            // 서버는 “500 내부 서버 오류” 응답을 보냄
            res.end('<h1>사이트가 공사중입니다.</h1>')
            // 브라우저에는 '사이트가 공사중입니다.'라고 표시됨
        } else {   
            // console.log(data);
            res.writeHead(200, { 'Content-Type': 'text/html' }); // 2줄로 응답한다 
            // HTTP 200 OK + HTML 타입으로 응답, index2.html의 내용을 통째로 브라우저에 전달
            res.end(data);     
            // → 브라우저 화면에 HTML 파일이 그대로 렌더링됨.
        }
    });
});

server.listen(8000);  // 1줄 서버 열고, 8000번 포트에서 서버가 대기 상태가 됨.

// 브라우저 localhost:8000 접속
//            │
//            ▼
//   [Node 서버]   ← request 발생
//            │
//   fs.readFile(index2.html)
//            │
//   ├─ 실패 → 500 + "사이트 공사중"
//   └─ 성공 → 200 + index2.html 내용
//            │
//            ▼
//    브라우저에 HTML 표시!