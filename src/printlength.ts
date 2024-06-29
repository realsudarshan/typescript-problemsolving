//Write a function called printLength that takes either a string or an array and prints its length. Use type assertions to handle both types.
function printLength(a:string|string[]):number{
    if(typeof a==='string'){
         return(a as string).length;
    }
    else{
       
        return a.length;
    }
}
console.log(printLength("Shyam"));
console.log(printLength(["ram","shyam","hari"]));