"use strict";
function getFullname(a) {
    return (a.firstname + a.lastname);
}
let o = { firstname: "Shyam",
    lastname: "Dhakal"
};
console.log(getFullname(o));
