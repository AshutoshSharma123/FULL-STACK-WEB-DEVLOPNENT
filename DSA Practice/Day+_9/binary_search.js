let array = [1, 23, 345, 45, 346, 5, 567, 4452, 342]
array.sort((a, b) => a - b);
let target = 45;
let start = 0;
let end = array.length - 1;

while (start <= end) {

    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
        console.log("Element found at index: " + mid);
        break;
    }
    else if (array[mid] < target) {
        start = mid + 1;
    }
    else if (array[mid] > target) {
        end = mid - 1;

    }
    else {
        console.log("Element not found");
    }
}