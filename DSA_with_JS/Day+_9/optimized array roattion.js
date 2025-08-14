
// Optimized array rotation using a temporary array
// This code rotates the array to the right by k positions
// in a more efficient way than the previous example.
let arr = [2, 3, 4, 5, 6, 7, 7, 8, 9, 9, 10];
let temp = new Array(arr.length);
let k = 3;
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
}

console.log(temp); // Output: [5, 6, 7, 7, 8, 9, 9, 10, 2, 3, 4]
