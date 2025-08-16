
// basic function

function abc() {
    console.log("hello world");
}


var i;
for (i = 1; i < +9; i++) {
    abc();
}


// asking from user and then running the function
var ans = Number(prompt("enter a value"))
var j;
for (j = 1; j <= ans; j++) {
    abc();
}




// adding parameters to function

function func(a, b, c, d) {
    console.log(a + b + c + d);
    console.log(a, b, c, d);


}
func(1, 2, 3, 4);

//function using a variable is called 'Function Expression'
var a = function () {
    console.log("function using a variable  is working");

}
a();



//Fat Arrow Function   "ES6 Model"


// with one parameter there's no need the () instead we can use it simply as we have done below in place of l
let pqrs = l => {
    console.log(l)
}
pqrs(12)

