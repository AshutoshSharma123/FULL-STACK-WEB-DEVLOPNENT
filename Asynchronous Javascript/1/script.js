// function getDetails(username, cb) {
//     setTimeout(function () {
//         console.log('sending details of ' + username);
//     }, 1000);
//     setTimeout(function () {

//         console.log('fetching details....');

//     }, 3000);
//     setTimeout(function () {
//         cb(username);
//     }, 5000);
// }

// getDetails('Ashutosh', function (username) {
//     console.log('fetched details of ' + username);
// });


// callback hell
function step_1(cb) {
    console.log('step 1 Performed');
    cb()
}

function step_2(cb) {
    console.log('step 2 Performed');
    cb()
}

step_1(() => {
    step_2(() => {
        console.log("all steps performed");

    })


})