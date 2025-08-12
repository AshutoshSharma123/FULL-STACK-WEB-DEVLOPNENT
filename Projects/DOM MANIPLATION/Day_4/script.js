let array = ['CSK', 'MI', 'RCB', 'KKR', 'SRH', 'DC', 'PBKS', 'GT', 'LSG'];

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

h1.addEventListener('click', () => {
    let num = Math.floor(Math.random() * array.length);

    h2.innerHTML = array[num];
    console.log(`Selected Name: ${array[num]}`);

})