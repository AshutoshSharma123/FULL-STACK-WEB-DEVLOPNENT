//parameters with rest operator as 1,2,3 are sent to aprameters rest all the values are given to chacha parameter in form of array using rest operator in function parameter i.e. '...'
function abcd(a, b, c, ...chacha) {
    console.log(a, b, c, chacha);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 0, 0, 0,)

//hoisting -> variable declaration is automatically done on the top in Javascript
console.log(a);
var a = 10;

// hoisting using function
pqrs();
function pqrs() {
    console.log("Hello from function")
}
//iffee(immediattely invoked function expression) -> a function is wraped in barckets the called instantly usin a pair of closed brackets'()' in same line

(function wr() {
    console.log("this is done using iffe ")
})();


//hof  -> Higher Order Functions
function lm() {
    return function () {
        console.log("Heyeyeye11");
    }
}
var answer = lm();
answer(); //answer()= lm() () 

// higher order function -> here we have given a function as a parameter

function sample(take_value_function) {
    take_value_function();
}
sample(function () { console.log("parameter of sample function while calling itself is a function which is given to take_value_ficntion and then it is called") });


// cb fnc ->"CALL BACK FUNCTION" as we can se the above example. As we given a function as a parameter i.e. function(){console.log("para...........")}  . This is call back function. and sample function is Higher Order function



// an example of higher order funcction

function exam(wish) {
    wish();
}
exam(function () {
    console.log("best of luck for the exam");

})





//first class fnc -> It's is a phenomenon in which a function is considered as a value/object . This is exclusive in java







//pure fnc -> a function which does'nt change a variable globally


//impure fnc -> a function which  change a variable globally


// scope i.e. -> local and global(easy topic)


//closure -> a concept in which a parent func return a child function and the child function takes the value from parent function

function parent() {
    var t = 100;
    return function () {
        console.log(t);

    }
}
parent()();