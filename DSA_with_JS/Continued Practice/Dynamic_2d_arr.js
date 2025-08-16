let prompt = require("prompt-sync")()
let array_size = Number(prompt("Enter the size of the array: "))
let arr = new Array(array_size)
for (let i = 0; i < arr.length; i++) {
    let inner_size = Number(prompt(`Enter the size of inner array ${i} th index : `))
    arr[i] = new Array(inner_size)
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt(`Enter the element at position [${i}][${j}]: `));
    }
}


console.log(arr);


