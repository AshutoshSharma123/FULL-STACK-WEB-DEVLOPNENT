// sum of 2 integer
let a = 10;
let b = 23;
console.log("the sum of " + a + ' and ' + b + " is " + (a + b));

// string concatenation
let p = "ashu"
let q = "tosh"
console.log(typeof (p + q));

// Typecursion
console.log(typeof (1 + '1')) // string->11
console.log(typeof (1 - '1')) // number->0
console.log(typeof ('5' / '2')); // number->2.5 


let age = prompt("enter your age");
let age_2 = Number(age);
console.log(typeof (age));//string
console.log(typeof (age_2));//number


// swap 2 numbers
let t = 10
let s = 20
s = t + s
t = s - t
s = s - t
console.log(s, t);

//operators ARE EASY BUT REMEMBER THE BODMAS
console.log(20 % 3);// when we divide 20 by 3 then remainder is 2 . % gives the remainder of the operations

// Relational Operators
console.log(10 > 9);
console.log(10 <= 9);

// == and ===
console.log(10 == "3");//false
console.log("10" == "3");//false
console.log("10" === "3");//false
console.log(10 == 3);//false
console.log(10 === 11);//false




// increment & decrement
st = 10;
console.log(st++);//10
console.log(++st);//12
dt = 19
console.log(--dt);//18
console.log(dt--);//18
console.log(dt--);//17
console.log(dt);//16




