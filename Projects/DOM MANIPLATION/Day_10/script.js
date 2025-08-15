


// a move event listener that changes the background color of the body

// body.addEventListener("mousemove", (e) => {


//     let a = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let d = Math.floor(Math.random() * 256);
//     body.style.backgroundColor = `rgb(${a}, ${b}, ${d})`;

// });


// a scroll event listener that vanishes the nav bar when scrolling down and shows it when scrolling up
let nav = document.querySelector("nav");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // scrolling down → hide navbar
        nav.style.top = "-80px";
    } else {
        // scrolling up → show navbar
        nav.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
