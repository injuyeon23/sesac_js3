const CommonGen = require('./CommonGen'); //부모인 CommonGen

class GenderGen extends CommonGen { 
    constructor(lang) { 
        super(); // ✔ super()는 “부모(CommonGen) 먼저 초기화해주세요!” 라는 의미.
        // 부모 클래스의 constructor가 먼저 실행돼야 해서 부모의 세팅이 필요하다 
        this.lang = lang; // ✔ this.lang에 저장해서 generate()에서 활용함., language의 lung
    }
    generate() {
        if (this.lang == "KOR") { //한국어일 경우 
            return Math.random() < 0.5 ? "남성" : "여성"
            // 0.5보다 작으면 true → 첫 번째 값
            // 0.5보다 크면 false → 두 번째 값
        } else { // 한국어가 아닐 경우 
            return Math.random() < 0.5 ? "Male" : "Female" 
        }
    }
}

module.exports = GenderGen;