class Shape {
    constructor(name) {
        this.name = name;
    }
    // getArea() {
    //     return 0;
    // }

    getArea() { //이걸 abstract class처럼 나를 강제로 구현해줘 
        throw Error("나를 좀 구현해주시오");
    }

}

module.export = Shape;