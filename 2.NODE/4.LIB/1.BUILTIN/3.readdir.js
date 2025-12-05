const fs = require('fs');
// fs는 파일 관리자, “내가 컴퓨터의 파일을 읽고 싶은데, 파일 시스템 도구(fs)를 가져와줘.”
const path = require('path');
// path.join()을 쓰면 자동으로 깔끔하고 OS 맞는 경로를 만들어줌.

const basePath = '../';
// ../"는 “현재 폴더의 상위 폴더

// 
fs.readdir(basePath, (err, files) => { // 이 폴더(box) 열어보고 안에 뭐 들어있나 리스트 좀 줘!
    if (err) { // 폴더가 없거나 권한 없으면 err가 들어옴.
        console.log('아몰라 오류났데. 일단 끝.');
        return; 
    }

    console.log('성공결과: ', files);
    files.forEach(file => { // 파일 하나씩 꺼내서 경로를 만들어서 출력하자
        const filePath = path.join(basePath, file); // “폴더 경로 + 파일이름” 합치기
        console.log('파일: ', filePath);
    })
});