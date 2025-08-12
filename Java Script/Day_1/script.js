
//hoisting
console.log(a)
var a = 100;
console.log(a)



// difference between == and ===

// == only checks the value
var a = 10
var b = '10'
if (a == b) {
    console.log("true")

}
else {
    console.log("false");

}


// what does === performs?
// === checks values and datatype

var q = 10
var r = '10'
if (q === r) {
    console.log("true")

}
else {
    console.log("false");

}

// for loop

for (var a = 10; a > 0; a--) {
    console.log(a);

}
// Nan
let t
console.log(t + 3);

// what is nan?
console.log(typeof NaN);

