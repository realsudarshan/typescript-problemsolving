//Write a generic function called reverseArray that takes an array of any type and returns a new array with the elements in reverse order.
function reverseArray<T>(a:T[]):T[]{
   a.reverse();
    return a;
}
console.log(reverseArray([1,2,3]));
console.log(reverseArray(["apple","ball","cat"]));

