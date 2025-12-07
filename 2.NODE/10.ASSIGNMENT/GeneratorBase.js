// 고객 정보 부모: Common
// 고객 정보 자식: name,Gender,Birthdate,Email

class GeneratorBase {
    generate() {
        throw new Error ('함수를 구현하시오');
    }
}

module.exports = GeneratorBase;