//** 1️⃣ Console & Basic Operations(5 Questions) **

console.log("hello");
console.warn("hello")
console.error("hello")
console.info("Hello")

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

console.log(35 * 2 - (10 / 2) + 7);

//3. Log the data type of "123", 123, true, and null using typeof.

console.log(typeof ("23"))
console.log(typeof (23))
console.log(typeof (true))
console.log(typeof (null)) // this is javascript blunder done by developers who javascript 
console.log(typeof 'ashutosh sharmas age is 24')

//4. Write a program that swaps the values of two variables.

let a = 2
let b = 3, temp;
console.log("before swap a ->" + a + ' and b-> ' + b);

temp = a;
a = b
b = temp;
console.log("before swap a ->" + a + ' and b-> ' + b);

// 5. use console.group-> here we have used group and done nesting of a group in a group
console.groupCollapsed("Ashutosh's Bio")
console.groupCollapsed("basic details")
console.log("Male")
console.log("23")
console.log("Unemployeed")

console.groupEnd()
console.log('Unmarried');

console.groupEnd()



//6. Declare a const object, modify its properties, and log the updated object.
// we can change value using const but cannot reset it in terms of datatype
//if want to keep the values as it is we have to use Object.freeze(object_name)
const obj = {
    name: 'Ashu'
    , sex: "m",
    age: 23
}
console.log(obj.age);
obj.age = 24
console.log(obj.age);

//7. Convert "50" (string) into a number using 3 different methods.
//1
let str = '52'
let n1 = Number(str)
console.log(typeof str);
console.log(typeof n1);
//2
let p1 = parseInt(str)
console.log(typeof str);
console.log(typeof p1);
//3
let t1 = +(str)
console.log(typeof str);
console.log(typeof t1);


//8. CHeck the availability of a string  without using .include

let str_2 = "Ashutosh Sharma"
console.log(str_2.indexOf('Sharma') !== -1);

//9. Explain the difference between undefined, null, and NaN with examples.

// undefined -> its declared but no value is assigned 
var r;
console.log(r);

// null->nothing
//NaN -> mathematical invalid calculation but NaN is also considered as anumber
let p = 2
console.log(0 / 0);




