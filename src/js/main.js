function loadHeader() {
    fetch("src/sections/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el header:", error));
}

function loadMainContainer() {
    fetch("src/sections/main-container.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el contenedor principal:", error));
}

function loadFooter() {
    fetch("src/sections/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el fotter:", error));
}

document.addEventListener("DOMContentLoaded", function(){
    loadHeader();
    loadMainContainer();
    loadFooter();
});
