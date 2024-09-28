function loadHeader() {
    fetch("src/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el header:', error));
}

document.addEventListener("DOMContentLoaded", loadHeader());
