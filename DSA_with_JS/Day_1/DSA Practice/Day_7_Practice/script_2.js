// remove duplicate values of an array

let arr = [2, 34, 5645, 4234, 23, 423, 5565, 7, 67, 68, 333, 33, 33, 333, 333, 22, 3, 2, 10]

let p = [... new Set(arr)]

console.log(p.toSorted((a, b) =>
    b - a
).length)

// sort array in ascending order & decending order

let dec = p.toSorted(function (a, b) {
    return a - b;
})
let dec2 = p.toSorted(function (a, b) {
    return b - a;
})


// find the most frequent element in an array
let obj = {};
arr.forEach(function (value) {

    obj[value] === undefined ? obj[value] = 1 : obj[value]++;
})


// reverse elements of the array

let t = [];
for (let i = p.length - 1; i >= 0; i--) {
    t.push(p[i])
}