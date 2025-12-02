const Person = require('./Person');

class Child {
    constructor(name, age, gender, job) {
        super(name, age, gender);
        this.job = job;
    }

    }
module.exports = Child;