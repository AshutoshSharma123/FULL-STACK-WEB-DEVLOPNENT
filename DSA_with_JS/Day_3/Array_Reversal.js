
// reversiing an array using a for loop
// This code reverses an array using a for loop but here one new array is created to store the reversed elements.
// The original array remains unchanged. 

let arr = [2, 3, 4, 6, 67, 21, 8, 8, 5, 3,]
let arr_2 = new Array(arr.length);
let i = 0;
for (let j = arr.length - 1; j >= 0; j--) {
    arr_2[i] = arr[j];
    i++;
}
console.log(arr);

console.log(arr_2);

/// without using a new array
// This code reverses an array in place, meaning it modifies the original array without creating a new one.
let arr_3 = [2, 3, 4, 6, 67, 21, 8, 8, 5, 3];
let l = 0; let m = arr_3.length - 1;
while (l < m) {
    let temp = arr_3[l];
    arr_3[l] = arr_3[m];
    arr_3[m] = temp;
    l++;
    m--;
}

console.log(arr_3);
