

// a program to understand the difference between getAttribute and setAttribute 

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let h1 = document.createElement("h1");
let body = document.querySelector("body");
let button = document.querySelector("button");
button.addEventListener("click", function () {
    let src1 = img1.getAttribute("src");
    let src2 = img2.getAttribute("src");
    img1.setAttribute("src", src2);
    img2.setAttribute("src", src1);
    console.log("Image sources swapped!");
    h1.textContent = "Imaged  Swapped"; body.appendChild(h1);
    h1.style.color = "white";
    h1.style.textAlign = "center";
    h1.style.fontSize = "2rem";
    h1.style.marginTop = "20px";

})


