const GeneratorBase = require('../GeneratorBase');

class ItemPrice extends GeneratorBase {
    constructor() {
        super(); 

        // 카테고리별 가격 범위 설정
        // 예: "상의": [최소가격, 최대가격]
        this.priceRange = {
            "상의": [30000, 80000],
            "하의": [40000, 100000],
            "신발": [70000, 200000],
            "가방": [20000, 200000],
            "아우터": [80000, 300000]
        };
    }

    generate(category) {

        // 1) 전달받은 category가 priceRange 안에 존재하는지 확인
        const range = this.priceRange[category];

        // "!range" 는 "range가 존재하지 않으면" 이라는 조건
        // if (!range) = "range가 없다면" 
        if (!range) {
            throw new Error(`가격 범위가 정의되지 않은 카테고리: ${category}`);
        }
        const [min, max] = range;
        const price = Math.floor(Math.random() * (max - min + 1)) + min; // 최대값을 포함시키기 

        return price;
    }
}

module.exports = ItemPrice;
