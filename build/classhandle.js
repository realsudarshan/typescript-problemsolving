"use strict";
//Create a class called Rectangle with properties width and height and a method getArea that returns the area of the rectangle.
class Rectangle {
    constructor(length, breadth) {
        this._length = length;
        this._breadth = breadth;
    }
    getArea() {
        return (this._length * this._breadth);
    }
}
let rect = new Rectangle(30, 40);
console.log(rect.getArea());
