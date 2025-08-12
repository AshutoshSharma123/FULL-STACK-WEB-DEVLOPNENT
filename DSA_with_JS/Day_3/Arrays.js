let prompt = require('prompt-sync')()
let size = Number(prompt('Enter the size of the array '))
let arr = new Array(size)
let sum = 0
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt('enter ' + i + " th number "))
    sum += arr[i]
}
console.log(arr);
let max = arr[0]
for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
        max = arr[index]

    }
}

console.log('maximum element is ' + max);



