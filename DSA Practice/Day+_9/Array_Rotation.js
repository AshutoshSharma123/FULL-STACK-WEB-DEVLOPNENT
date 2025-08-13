let arr = [1, 2, 3, 4, 5];
let k = 3;
for (let j = 0; j < k; j++) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}
console.log(arr); // Output: [3, 4, 5, 1, 2]
// This code rotates the array to the left by k positions.
