class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class triangle extends Polygon{
  constructor(height, width){
    super(height, width )
    this.name = "traingle "
  }
  area(){
   return `The area of this ${this.name} is ${this.height * this.width}`;

  }
  sayName(){
    console.log(`Hi i am a polygon and my name is ${this.name}`);
    
  }
  
}
const triangle1 =  new triangle(10, 10);
triangle1.sayName();

class circle extends Polygon {
  constructor(height, width, radius){
    super(height, width);
    this.name = "circle";
    this.radius = radius;

  }
  get area(){
    return `The area of this ${this.name} is ${this.getArea()} `
  }

  getArea(){
    return Math.PI * Math.pow(this.radius, 2);
  }
  sayName(){
    console.log(`Hi i am a polygon and my name is a not a ${this.name}`);
    
  }
}

const circleArea1 =  new circle(10, 10 , 2);
circleArea1.sayName();
console.log(circleArea1.area);

//as that if the new class needs only one argument like in the above case
//how to solve it by passing only one value on the function instead of above passing 
// three where the othe two argument are not necessary.







