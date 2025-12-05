// CSV 파일에 헤더가 없기 때문에, csv-parser에게 직접 컬럼 이름을 지정해줘서 한 줄씩 객체로 바꿔서 results 배열에 넣는 코드.
const csv = require('csv-parser'); // 우리가 설치한 외부 모듈 npm i csv-parser

const fs = require('fs'); // 내장 모듈 (builtin 모듈)

const results = []; 

fs.createReadStream('data-with-noheader.csv')
// fs.createReadStream('data-with-header.csv')
    .pipe(csv({ 
        headers: ['이름', '나이', '성별', '생년월일'] // 내가 원하는 키를 등록
        // csv-parser는 기본적으로: CSV 첫 줄을 헤더라고 인식함 그 헤더를 기준으로 key를 만들고, 그 아래 줄들을 읽음 
    }))
    .on('data', (data) => results.push(data)) // CSV의 각 줄이 JS 객체가 될 때마다 이 이벤트가 실행됨.
    .on('end', () => {  // 
        console.log(results); // CSV 파일 전체 읽기가 끝나면, 지금까지 만든 객체 배열(results)을 출력
    });

// data-with-noheader.csv
//     ⬇ (read stream)
// fs.createReadStream()
//     ⬇ (데이터 조각이 pipe로 전달)
// pipe(csv({ headers: [...] }))
//     ⬇ (각 줄이 객체로 변환)
// on('data') → results.push(...)
//     ⬇
// on('end') → 전체 results 출력
    