// CSV 파일(엑셀처럼 생긴 텍스트 데이터)을 Node.js로 읽어서 객체 배열로 변환하는 프로그램

const csv = require('csv-parser'); // 우리가 설치한 외부 모듈 npm i csv-parser
// CSV 파일(콩마로 구분된 파일)을 JS 객체로 자동 변환해주는 “CSV 해석기(parser)”
// npm i csv-parser로 csv 설치함 

const fs = require('fs'); // 내장 모듈 (builtin 모듈)

const results = [];
// CSV 파일을 읽으면서 나온 데이터(한 줄 = 한 객체)를 여기에 저장할 예정.

fs.createReadStream('data.csv') // CSV 파일을 한 번에 읽는 게 아니라 “조각조각(stream)”으로 읽기
    // fs.createReadStream('data-with-header.csv')
    // fs.createReadStream('data-with-noheader.csv')
    .pipe(csv()) // 파일 스트림 → CSV parser 스트림으로 관을(pipe) 이어주는 것.
    .on('data', (data) => results.push(data))
    // csv-parser가 CSV의 각 줄을 해석할 때마다 한 줄씩 객체로 만들어서 data로 전달해줌.
    .on('end', () => {
        console.log(results);
        // CSV 파일 읽기가 끝났을 때(모든 줄 처리 후) 실행됨. 여기서 최종 결과 배열 전체를 출력하는 것.
    });

//     data.csv (파일)
//    │
//    ▼
// fs.createReadStream()
//    │   (텍스트 스트림)
//    ▼
// .pipe(csv())  ← CSV parser
//    │   (한 줄씩 JS 객체 생성)
//    ▼
// .on('data') → results 배열에 push
//    │
//    ▼
// .on('end') → 모든 데이터 읽기 완료 → results 전체 출력