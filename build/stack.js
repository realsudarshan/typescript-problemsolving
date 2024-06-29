"use strict";
//Write a generic class called Stack that represents a stack data structure. It should have methods push, pop, and peek.
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.pop()); //output:2
console.log(stack.pop()); //output:1
let stringStack = new Stack();
stringStack.push("apple");
stringStack.push("banana");
stringStack.push("cherry");
console.log(stringStack.peek()); // Output: "cherry"
console.log(stringStack.pop()); // Output: "cherry"
console.log(stringStack.pop()); // Output: "banana"
