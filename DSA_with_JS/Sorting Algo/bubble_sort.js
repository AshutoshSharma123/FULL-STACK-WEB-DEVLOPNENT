let arr = [2, 1, 4, 5, 212, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j+1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr); // Output: [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 212]