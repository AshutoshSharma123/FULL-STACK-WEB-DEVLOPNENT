
function greet(greeting) {
    return function (name) {
        console.log(greeting, name);

    }
}

let wish = greet('hello goodmorning');
wish('Ashutosh ');

function spanish(greeto) {
    return (name) => {
        console.log(greeto, name);

    }
}

let wish_spanish = spanish('hola ');
wish_spanish("Ashu");


function limited_execution(fn) {

    let p = false
    return function () {
        if (p === false) {
            fn()
            p = true
        }
        else console.error();
        


    }

}

limited_execution(function () {
    console.log('Ran');

})();