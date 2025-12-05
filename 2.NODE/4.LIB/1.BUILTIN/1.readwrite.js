// 파일 입출력을 해야함...

// https://nodejs.org/docs/latest 에서 fs (또는 file system) 관련 내용을 찾는다

const fs = require('fs'); // → Node.js 안에 기본으로 들어있는 “파일 시스템 모듈”을 가져오는 코드


// 2. 나 끝나면 내 안의 서브 2-a 를 호출해줘
// 콜백... 내가 너에게 일을 시켰으니, 다했으면 그때 나를 불러줘...
fs.readFile('example.txt', 'utf8', (err, data) => {
    // 2-a. 여기가 나중에 우리 os로부터 재 호출될 콜백 함수 - 언제 실행될지 나도 모름

    // → readFile = "OS에게 example.txt 파일을 읽어달라고 부탁하는 것"
    // → 'utf8' = 사람이 읽을 수 있는 글자로 읽어달라는 뜻
    // → (err, data) => { ... } = "읽기 끝나면 나를 불러주세요(콜백)"
    console.log('일단끝 - 결과가 성공/실패건 일단 끝났음.');
    if (err) {
        console.log('파일 읽기에 실패했습니다: ', err.message);
    } else {
        // console.log('(파일 읽기에 성공했습니다.) 라고 보통 말 안하고 결과를 줌.');
        console.log(data);
    }
});

// 3.
console.log("내가 더 먼저 끝남");
// → 이 코드가 readFile보다 먼저 실행됨.
// → 이유: readFile은 “비동기 작업(기다리지 않는 작업)”이라 OS에게 맡기고 바로 다음 줄 실행.

// 4.
// 파일 쓰기 - os야.. 니가 쓰고, 다 끝나면 나를 불러줘.
const content = "여기에는 내가 쓰고 싶은 내용을 작성합니다.";
fs.writeFile('example2.txt', content, 'utf8', (err) => {
    // → writeFile = "OS야, example2.txt 파일에 content를 써줘"
    // → 이것도 비동기 → Node는 기다리지 않고 다음 코드 실행함.
    // 4-a. 여기가 나중에 우리 os로부터 재 호출될 콜백 함수 - 언제 실행될지 나도 모름

    if (err) {
        console.log('파일쓰기에 실패했습니다.');
    } else {
        console.log("파일 쓰기에 성공했습니다");
    }
});

// 5.
console.log("난 언제호출될까?");


