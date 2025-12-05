class CommonGen { // “자식 클래스들이 공통으로 따라야 할 규칙”만 적어둔 설계도 같은 존재 
    generate() {
        throw new Error('이 함수를 구현하시오')
    }
}

module.exports = CommonGen;