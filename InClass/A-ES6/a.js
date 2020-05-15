// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100



class cylinder{
    constructor(length, bredth, height){
        this.length = length;
        this.bredth = bredth;
        this.height = height;
    }

    get area ( ){
        return this.calcArea();
    }

    get volume(){
        return this.calcVolume();
    }

    calcArea(){
        return this.length * this.bredth;
    }
    calcVolume(){
        return this.length * this.bredth *this.height;
    }
}

const square = new cylinder(10, 10, 12);
console.log(square.volume);



