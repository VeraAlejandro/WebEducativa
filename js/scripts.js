const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");

    });

}


const interactiveButton =
    document.getElementById("interactiveButton");

const message =
    document.getElementById("message");


if (interactiveButton && message) {

    interactiveButton.addEventListener("click", function () {

        message.textContent =
            "JavaScript está funcionando correctamente";

        interactiveButton.textContent =
            "Funciono";

    });

}