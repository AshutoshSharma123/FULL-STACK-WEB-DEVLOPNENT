// let arr = ['Ashu', 'Aditya', 'Anvi', '34', 55]
// console.log(arr);


// arr.forEach(function (elem, idx) { // foreach is a higher order function 
//     // here funtion has 2 parameters and we can name anything but the first parameter represents the element and 2nd parameters represents the index in an array
//     console.log(elem, idx);


// })

// Array of Objects
let array = [{
    user: 'Ashu',
    age: 24,
    occupation: 'unemployeed',
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    user: "Aditya",
    age: 22,
    occupation: 'unemployeed',
    img: 'https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D'
}, {
    user: "Anvi",
    age: 5,
    occupation: 'student',
    img: "https://images.unsplash.com/photo-1644581204918-2b8903afcc8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
}, { user: 'Ajay', age: 29, occupation: 'Police', img: "https://images.unsplash.com/photo-1547355332-c590834bbbb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvbGljZXxlbnwwfHwwfHx8MA%3D%3D" }]

let sum = ' '
let age_sum = " "
let total = 0
array.forEach(function (elem) {

    sum += `    <div class="card">
        <img src="${elem.img}"
            alt="">
        <h1>${elem.user}</h1>
        <h1>${elem.age}</h1>
        <h1>${elem.occupation}</h1>

    </div > `



    total += (elem.age)



})
age_sum = ` <p>  the total age of all people is ${total} </p>`
document.querySelector('body').innerHTML = sum + age_sum
