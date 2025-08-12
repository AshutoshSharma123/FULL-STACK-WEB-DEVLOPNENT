function calculateSumAndMean(arr, n) {
    // Write your logic here
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }

    let mean = sum / n
    return ("Sum: " + sum) ("Mean: " + mean)
}

module.exports = { calculateSumAndMean };