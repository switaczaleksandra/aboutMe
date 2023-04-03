{
    const welcome = () => {
        console.log("Witam wszystkich developerów");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".nextColorName");

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            nextColorName.innerText = "jasny";
        } else {
            nextColorName.innerText = "ciemny";
        }
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

        welcome();

    };

    init();

}
