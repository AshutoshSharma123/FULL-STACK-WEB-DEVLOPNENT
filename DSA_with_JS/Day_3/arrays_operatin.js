// find the greatest number in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 23, 67, 89, 122, 34, 56, 78, 90];
let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max && arr[i] != max) {
        smax = max;
        max = arr[i];
    } else if (arr[i] > smax) {
        smax = arr[i];
    }
}
console.log("Greatest number is: " + max);
console.log("Second greatest number is: " + smax);