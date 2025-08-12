
// What is Map -> We can assign an empty array and map values of the araay to an empty array using Map function using looping
let arr = [2, 3, 4, 5, 6]
let p = arr.map(function (chacha) {
    return 'hello_chacha';
})


// Filter -> works similarly like map but here the we can assign a condition(of either true/false)

let p2 = arr.filter(function (value) {
    return value < 5
})


//Reduce -> we can assign a new array can reduce all the value

// let p3=arr.reduce(function(accumulator,key){
//  return accumulator+key
// },key)


let p3 = arr.reduce(function (acc, val) {
    return acc + val
}, 1)


// Use .reduce function to get the sum of the emlements of the array
let p4 = arr.reduce(function (acc, val) {
    return acc + val;
}, 0)

let sum = 0
for (let i = 1; i < 100; i++) {
    sum += i;
}


// iterate through the script using for of loop
let str = 'Ashutosh Sharma'
for (let p of str) {
    console.log(p);
}

// Remove duplicate value from an array -> We can use set but set changes the datatype to set . So we removed the dupicate values using set and then again converted it into an array p6
let p5 = [1, 2, 4, 5, 6, 6, 69, 89, 9, 0, 0, 12, 23]
let p6 = [...new Set(p5)]

