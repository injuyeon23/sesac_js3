const GeneratorBase = require('../GeneratorBase');

class ItemName extends GeneratorBase {
    constructor() {
        super();
        this.items = {
            "상의": ["후드티", "맨투맨", "니트", "셔츠", "반팔티"],
            "하의": ["청바지", "슬랙스", "조거팬츠", "숏팬츠"],
            "신발": ["운동화", "샌들", "부츠", "슬리퍼"],
            "가방": ["백팩", "크로스백", "토트백"],
            "아우터": ["패딩", "코트", "자켓", "블레이저"]
        };
    }

    generate(category) {
        const itemList = this.items[category];  
        
        // 혹시 카테고리가 잘못 들어오면 에러 방지
        if (!itemList) {
            throw new Error(`없는 카테고리입니다: ${category}`);
        }
        
        const itemIdx = Math.floor(Math.random() * itemList.length);
        return itemList[itemIdx];
    }
}

module.exports = ItemName;
