// 객체 배열(records)을 csv-writer로 CSV 파일(data2.csv)에 저장하는 코드.
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// 외부 모듈 csv-writer를 사용 (npm i csv-writer)그 안에서 createObjectCsvWriter라는 함수만 꺼내오기

const csvWriter = createCsvWriter({ 
    path: 'data2.csv', // CSV 파일이 저장될 파일 이름 → data2.csv
    header: [ // CSV 파일의 "컬럼 이름"을 정의
    // id: records 안의 key 이름
    // title: CSV 파일에 표시될 컬럼 제목
        {id: 'name', title: '이름'},
        {id: 'age', title: '나이'},
        {id: 'gender', title: '성별'},
        {id: 'birthdate', title: '생년월일'}
    ]
});
 
const records = [ // CSV로 저장할 데이터 배열
    {name: '홍길동', age: 22, gender: "남", birthdate: "2000-01-01"},
    {name: '이길동', age: 32, gender: "남", birthdate: "2020-02-01"},
    {name: '김길동', age: 42, gender: "여", birthdate: "2030-03-01"},
    {name: '박길동', age: 52, gender: "남", birthdate: "2040-07-01"},
];
 
csvWriter.writeRecords(records) // returns a promise, writeRecords() records 배열 전체를 파일로 저장하는 함수. 성공하면 then() 실행
    .then(() => {
        console.log('...저장완료');
    });

// JS 객체 배열(records)
//     │
//     ▼
// csv-writer (CSV 작성기)
//     │
//     ▼
// data2.csv 파일 생성!
//     │
//     ▼
// 콘솔에 “저장완료” 출력