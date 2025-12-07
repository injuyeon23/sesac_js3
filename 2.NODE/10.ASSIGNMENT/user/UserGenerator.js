const UserName = require('./UserName');
const UserGender = require('./UserGender');
const UserBirthdate = require('./UserBirthdate');
const UserEmail = require('./UserEmail');

class UserGenerator {
    constructor() {
        this.nameGen = new UserName();
        this.genderGen = new UserGender();
        this.birthdateGen = new UserBirthdate(1950, 2010);
        this.emailGen = new UserEmail();
    }

    generate() {
        return {
        이름: this.nameGen.generate(),
        성별: this.genderGen.generate(),
        생년월일: this.birthdateGen.generate(),
        이메일: this.emailGen.generate()
        }
    }
}

module.exports = UserGenerator;

const gen = new UserGenerator();
console.log(gen.generate());