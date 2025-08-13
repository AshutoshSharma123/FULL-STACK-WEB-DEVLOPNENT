let button = document.querySelector('button');
let loader = document.querySelector('#loader');
let percent = document.querySelector('#percent');
let growth = document.querySelector('#growth');

button.addEventListener('click', () => {
    console.log("hello");
    loader.style.display = 'block';
    button.style.display = 'none';
    growth.style.display = 'block';

    let download = setInterval(() => {
        percent.innerText = `${parseInt(percent.innerText) + 1} %`;

        growth.style.width = `${parseInt(percent.innerText)}%`;

        if (parseInt(percent.innerText) == 100) {
            clearInterval(download);
            button.style.display = 'block';
            button.innerText = 'Downloaded';

        }



    }, 20)




})