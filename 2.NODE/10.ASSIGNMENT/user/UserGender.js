const UserCommon = require('../GeneratorBase');

class UserGender extends UserCommon {
    generate() {
        return Math.random() < 0.5 ? "남성" : "여성";
    }
}

module.exports = UserGender;