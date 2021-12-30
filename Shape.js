//import using require
const Shape = require('./shape');

class Circle extends Shape{
  constructor(color){
      super(color);
  }
      calculateArea(){}
}

module.exports = Circle;

//declare class

class Shape{

constructor(color){
  this.color = color;
}
calculateArea(){}
drawShape(){}
}

//Shape.color = '...'  //! static orioerties

module.exports = Shape;

//export class using module.export
