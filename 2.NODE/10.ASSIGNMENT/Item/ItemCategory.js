const GeneratorBase = require('../GeneratorBase');

class ItemCategory extends GeneratorBase {
    constructor() {
        super();
        this.categories = ["상의", "하의", "신발", "가방", "아우터"];
    }

    generate() {
        const categoriesIdx = Math.floor(Math.random() * this.categories.length);
        return this.categories[categoriesIdx];
    }
}

module.exports = ItemCategory;
