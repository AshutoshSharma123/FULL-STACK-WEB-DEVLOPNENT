
// sum of diagonal elements of a 2D array
// This code calculates the sum of the left and right diagonals of a 2D array   
// similarly same concept goes the pattern program to print "X" as a diagonal pattern

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let left_sum = 0;
let right_sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i === j) {
            left_sum += arr[i][j];
        }
        if (i + j === arr.length - 1) {
            right_sum += arr[i][j];
        }

    }
}
console.log(`Left Diagonal Sum: ${left_sum}`);
console.log(`Right Diagonal Sum: ${right_sum}`);