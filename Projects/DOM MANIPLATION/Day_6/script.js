// set timeout 


let button = document.querySelector('button');
let rem = document.querySelector('.rem');

button.addEventListener('click', () => {
    let status = document.querySelector('.status');
    rem.style.display = 'block';
    status.innerHTML = 'Request Sending...';

    button.style.display = 'none';
    setTimeout(() => {
        status.innerHTML = 'Friend ';
        status.style.color = 'green';
    }, 1000)
})

rem.addEventListener('click', () => {
    let status = document.querySelector('.status');
    button.style.display = 'block';
    rem.style.display = 'none';
    status.innerHTML = 'Request Cancelled';
    status.style.color = 'red';
    setTimeout(() => {
        let status = document.querySelector('.status');

        status.innerHTML = 'Stranger';
        status.style.color = 'black';
    }, 500);
})