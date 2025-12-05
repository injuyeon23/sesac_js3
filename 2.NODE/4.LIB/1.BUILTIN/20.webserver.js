// 3000번 포트에서 대기하다가 사용자가 접속하면 → 접속자의 IP를 찍고 → index.html 파일을 읽어서 → 그대로 브라우저에 보내주는 웹서버임.

const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) => { // (req, res)는 요청(request)과 응답(response)
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    const ip = req.socket.remoteAddress; // req.socket.remoteAddress 브라우저(클라이언트)의 IP 주소를 의미함.
    console.log('접속자를 추적했음: ', ip); 

    // 사용자에게 보낼 파일 읽어서 준비하기
    fs.readFile('index.html', 'utf-8', (err, data) => { // 서버가 파일(index.html)을 읽어서→ data에 그 파일 내용이 문자열로 들어감
        if (err) {
            console.log('에러');
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end("알수없는 오류가 발생했습니다.");
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' }); // ✔ 200 OK HTML 파일로 응답함.
        res.end(data);
    })
});

server.listen(3000); // 3000번 포트에서 서버가 대기함.