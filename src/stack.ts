//Write a generic class called Stack that represents a stack data structure. It should have methods push, pop, and peek.
class Stack<T>{
    private items:T[];
    constructor(){
        this.items=[]
    }
    public push(element:T){
        this.items.push(element);
    }
    public pop():T|undefined{
       return this.items.pop()
    }
    public peek():T|undefined{
        return this.items[this.items.length-1]
    }

}
let stack=new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3
console.log(stack.pop());  // Output: 3
console.log(stack.pop()); //output:2
console.log(stack.pop());  //output:1

let stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");
stringStack.push("cherry");

console.log(stringStack.peek()); // Output: "cherry"
console.log(stringStack.pop());  // Output: "cherry"
console.log(stringStack.pop());  // Output: "banana"