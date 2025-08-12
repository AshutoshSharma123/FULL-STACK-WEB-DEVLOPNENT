// callbacks

function abcd(val) {
    val()
}
abcd(function p() {
    console.log('hello from callback function')
}

)
//higher order functions -> a function which accepts the function or return a function  as its parameter



function pqrs() {    // parent function
    return function () {     //child function
        console.log('hello from hof');

    }
}
pqrs()();


// closure -> when a hof and child function takes a value from parent function 


function lmn() {         //parent function 
    let l = 10;          // parent function value
    return r => {        // child function
        console.log(l);  // child function taking value from parent function

    }
}
lmn()();



// function taking a function as an arguement/parameter and running after a delay of 3 sec

function func_1(value) {
    setTimeout(value, 3000)
}

func_1(function arg() {
    let t = 999;
    console.log(t);
})


// implement own version of .map


//-> simple map function
let arr = [2, 3, 5, 6, 8, 9, 0]

let p = arr.map(function (val_2) {
    return val_2 + 2
})

// -> customised function


function ashu_hap(a, fun_2) {
    let new_arr = [];

    for (const item of a) {   // better way to write for loop
        new_arr.push(fun_2(item));
    }
    return new_arr;
}

let answer = ashu_hap(arr, function (val_3) {
    return val_3 + 2
})



// again own map function

let arr_2 = [12, 30, 59, 6648, 29, 10]


function map2(array, fn) {
    let new_array = [];
    for (const item of array) {
        new_array.push(fn(item));
    }
    return new_array;
}

let ans = map2(arr_2, function (val_4) {
    return val_4 + 4;
})


//  write a function that uses closures to create a counter

function counter() {
    let count = 0
    return () => {
        count++;
        console.log(count);
    }
}
counter()();


//Implement a function which limits the no of times it is called

function limiter(fn, limit_val) {
    console.log(limit_val);
    let total_called = 0;
    return function () {
        if (total_called < limit_val) {
            total_called++;
            fn();
        }
        else console.log('limit exceeded');

    }
}
let l_fun = limiter(function () { console.log("hey") }, 3);
l_fun();
l_fun();
l_fun();
l_fun();





