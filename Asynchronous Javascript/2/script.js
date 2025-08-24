// let prom = new Promise((res, rej) => {
//     console.log('fetching details.....');
//     console.log('....taking a bit longer time');
//     console.log('got some error');
//     res();
//     rej();


// })

// prom.then(() => { console.log('issues resolved'); }).catch(() => {
//     console.log('issues not resolved');
// })



// Real world example to understand the Promises



function checkBalance() {
    return new Promise((resolve, reject) => {
        // Simulate checking balance
        setTimeout(() => {
            const balance = 100; // Assume user has $100 balance
            if (balance >= 10) { // Check if balance is sufficient
                resolve(true); // Resolve promise if balance is sufficient
            } else {
                reject("Insufficient balance"); // Reject promise if balance is insufficient
            }
        }, 2000);
    });
}

function deductBalance() {
    return new Promise((resolve, reject) => {
        // Simulate deducting balance
        setTimeout(() => {
            const newBalance = 90; // Assume balance is deducted successfully
            resolve(newBalance); // Resolve promise with new balance
        }, 2000);
    });
}

function sendConfirmation() {
    return new Promise((resolve, reject) => {
        // Simulate sending confirmation message
        setTimeout(() => {
            console.log("Order confirmed!"); // Send confirmation message
            resolve(); // Resolve promise
        }, 2000);
    });
}

// Chain the promises together
checkBalance()
    .then((hasBalance) => {
        if (hasBalance) {
            return deductBalance();
        } else {
            throw new Error("Insufficient balance");
        }
    })
    .then((newBalance) => {
        console.log(`New balance: $${newBalance}`);
        return sendConfirmation();
    })
    .then(() => {
        console.log("Order complete!");
    })
    .catch((error) => {
        console.error(error); // Handle any errors that occur
    });