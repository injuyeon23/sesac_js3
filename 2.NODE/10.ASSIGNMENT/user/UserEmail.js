const UserCommon = require('../GeneratorBase')

class UserEmail extends UserCommon {
    constructor() {
        super();
        // 1) 사용할 문자 집합 만들기
        this.randomStrings = "abcdefghijklmnopqrstuvwxyz0123456789";
        this.stringLength = 7;
    }
    generate() {
        let emailId = ""; // 랜덤 문자열을 담을 빈 문자열 만들기
        for (let i = 0; i < this.stringLength; i++) {
            // 랜덤 인덱스 만들기
            const index = Math.floor(Math.random() * this.randomStrings.length);
            // 랜덤 문자 뽑기 
            const randomChar = this.randomStrings[index];
            // emailId에 붙이기 
            emailId += randomChar; //뽑힌 문자 이어붙여야해서 += 
        }
        return emailId + "@gmail.com";
    }
}

module.exports = UserEmail;


// UserEmail
//    │
//    ├─ constructor()
//    │     ├─ randomStrings = "abc123..."  
//    │     └─ stringLength = 7
//    │
//    └─ generate()
//          ├─ emailId = ""
//          ├─ 7번 반복:
//          │      ├─ random index 생성
//          │      ├─ randomStrings[index] 추출
//          │      └─ emailId += 문자
//          └─ return emailId + "@gmail.com"