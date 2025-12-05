// 3000번 포트에서 기다리는 서버를 만들고, 누가 요청을 보내면 HTML로 “안녕”을 응답해주는 코드임.

const http = require('http');

const server = http.createServer(); // 서버 껍데기 만들기 

server.on('connection', () => { // 서버 연결 상태에서 바로 실행됨 
    console.log('TCP 연결이 시작되었습니다.');
});

server.on('request', (req, res) => { // 실제로 브라우저가 요청(GET / 등)을 보내면 실행됨.
    // 여기서 req는 손님 요청 정보, res는 내가 돌려줄 응답.
    console.log('HTTP 요청이 시작되었습니다.');
    // res.writeHead(200, { 'Content-Type': 'text/plain' }); // 나의 응답
    res.writeHead(200, { 'Content-Type': 'text/html' }); // 나의 응답 
    // 200 → 성공 OK / Content-Type: text/html → "나는 HTML로 응답할거야!"
    // res.end('Hello, HTTP Server!');
    res.end('<meta charset="utf-8"><H1>안녕</H1><H2>Heading2</H2>');
    // res.end()는 응답을 끝내고 보내는 메서드.
});

console.log('서버는 사실 여기에서 시작되었습니다.');
server.listen(3000);  // 서버의 대기상태, listen(3000)은 실행되면 “비동기적으로 기다리는 상태”가 됨