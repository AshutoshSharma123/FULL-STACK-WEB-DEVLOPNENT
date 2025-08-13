let arr = [2, 345, 653, 23, 452, 352, 345, 2345, 234556, 56, 456342, 32432534635, 67346342, 22]
let target = 99;
let index = -1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        console.log("Element found at index: " + i);
        index = i;
        break;

    }
    else if (i == arr.length - 1) {
        console.log("Element not found");
    }
} 
