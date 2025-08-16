let arr = [[1, 2, 3], [5, 6, 7], [9, 7, 1]];
for (const row of arr) {
    for (const value of row) {
        process.stdout.write(`${value}  `);
    }
    console.log();
    console.log();
}