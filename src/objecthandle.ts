//Write a function called getFullName that takes an object with firstName and lastName properties and returns the full name as a single string.
interface Person{
    firstname:string;
    lastname:string;
}
function getFullname(a:Person):string{
    return(a.firstname+a.lastname);
}
let o={firstname:"Shyam",
    lastname:"Dhakal"
}
console.log(getFullname(o));