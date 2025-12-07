// 각각의 기능을 하는 서브 생성기들 불러오기
const ItemCategory = require('./ItemCategory');
const ItemName = require('./ItemName');
const ItemPrice = require('./ItemPrice');

class ItemGenerator {

    constructor() {
        // 카테고리 만드는 애
        this.categoryGen = new ItemCategory();

        // 카테고리에 따라 상품명을 만드는 애
        this.nameGen = new ItemName();

        // 카테고리에 따라 가격 생성하는 애
        this.priceGen = new ItemPrice();
    }

    generate() {
        const category = this.categoryGen.generate();
        const name = this.nameGen.generate(category);
        const price = this.priceGen.generate(category);

        return {
            카테고리: category,
            상품명: name,
            가격: price
        };
    }
}

module.exports = ItemGenerator;

const gen = new ItemGenerator();
console.log(gen.generate());
