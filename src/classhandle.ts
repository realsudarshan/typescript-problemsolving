//Create a class called Rectangle with properties width and height and a method getArea that returns the area of the rectangle.
class Rectangle{
    private _length:number;
    private _breadth:number;
constructor(length:number,breadth:number){
    this._length=length;
    this._breadth=breadth;
}
public  getArea():number{
    return(this._length*this._breadth)
}
}
let rect=new Rectangle(30,40);
console.log(rect.getArea());