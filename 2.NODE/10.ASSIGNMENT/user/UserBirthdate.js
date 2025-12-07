const UserCommon = require('../GeneratorBase');

class UserBirthdate extends UserCommon {
    constructor(from, to) {
        super();
        this.yearStart = from;
        this.yearEnd = to; 
    }
    generate() {
        const year = Math.floor(Math.random() * (this.yearEnd - this.yearStart)) + this.yearStart; // 
        const month = Math.floor(Math.random() * 12) + 1; // 1 ~ 12
        const day = Math.floor(Math.random() * 28) + 1; // 1 ~ 28

        return `${year}년 ${month}월 ${day}일`
    }
}

module.exports = UserBirthdate;

