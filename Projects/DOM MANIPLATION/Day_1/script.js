let b = document.querySelector('.box')
let bt = document.querySelector('button')

function change() {
    b.style.backgroundColor = 'orange';
    b.style.width = '200px';
    b.style.height = '200px';
    b.style.border = '10px';
}

let h = document.querySelectorAll('h1')
bt.addEventListener('click', change)

