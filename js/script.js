console.log("Witam wszystkich developerów");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".nextColorName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        nextColorName.innerText = "jasny";
    } else {
        nextColorName.innerText = "ciemny"; 
    }
});

    