// 이 코드는 “3000번 포트에서 기다리는 서버”를 만들고, 누군가 연결하거나 요청을 보내면 그때 메시지를 찍는 프로그램임.

const http = require('http'); //“웹 서버를 만들 수 있는 http 도구를 가져와줘!”

const server = http.createServer(); // 서버 객체를 만드는 코드.

server.on('connection', () => { // ‘connection’ 이벤트 = 누가 서버에 연결만 해도 발생
    console.log('누군가의 연결이 시작되었습니다.');
});

server.on('request', () => { // ‘request’ 이벤트 = 누가 실제로 요청을 보내면 발생
    console.log('누군가의 요청이 시작되었습니다.');
});

console.log('서버는 사실 여기에서 시작되었습니다.'); // 이 로그는 서버가 준비되는 시점에 찍힘.
server.listen(3000);  // 서버의 대기상태에 들어가서..., 이제 서버가 실제로 문을 열고 기다리는 상태가 됨.
// 3000은 ‘포트 번호(port)’이고, 서버가 “여기로 접속하세요!”라고 정해놓는 문 번호임.
console.log('나는 언제 찍힐까요?'); // ✔ server.listen(3000)은 ‘비동기(Async)’로 동작함.