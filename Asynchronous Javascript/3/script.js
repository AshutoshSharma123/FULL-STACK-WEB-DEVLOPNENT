//Simulate a food delivery app
// Task create a function orderFood() that returns a promise. it should resolve after 5 seconds
// add a chance to reject with 'delivery failed' after 2 seconds

function orderFood() {

    console.log("ordering food");


    return new Promise((res, rej) => {
        setTimeout(() => {
            let chance = Math.random()
            if (chance < 0.7) {
                res();
            }
            else {
                rej()
            }
        }, 2000)
    });
}
orderFood().then(function () {
    console.log('order placed');
}).catch(() => {
    console.log('delivery failed');
})