let matrix = [[1, 2, 3], [4, 5, 6]]
let row = matrix.length
let col = matrix[0].length
let ans = Array(col)
for (let i = 0; i < ans.length; i++) {
    ans[i] = new Array(row)
}
console.log(ans);
