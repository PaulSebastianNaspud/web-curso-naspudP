import { Controller } from "../../controller/controller.js";

let currentIndex = 0; // Índice actual de cursos
const itemsPerPage = 10; // Número de cursos a mostrar por vez
let cardTemplate = ''; // Variable para almacenar la plantilla de la tarjeta

// Función para cargar la plantilla de la tarjeta (opcional si tienes una plantilla HTML)
function loadCards() {
    fetch("./src/components/card-course.html")
        .then(response => response.text())
        .then(card => {
            cardTemplate = card; // Almacena la plantilla de la tarjeta
            const cardContainer = document.getElementById("grip-all-card"); 
            const courses = Controller.getCourses(); // Obtiene la lista de cursos

            // Mostrar los cursos iniciales
            displayCourses(courses, cardContainer);

            // Actualizar los botones "Mostrar más" y "Mostrar menos"
            updateButtons(courses.length);
        })
        .catch(error => console.error("Error al cargar las tarjetas:", error));
}

// Función para mostrar cursos en la página
function displayCourses(courses, container) {
    // Limitar el número de cursos a mostrar
    const coursesToDisplay = courses.slice(currentIndex, currentIndex + itemsPerPage);

    // Crear elementos para los cursos
    coursesToDisplay.forEach(course => {
        let newCard = document.createElement('div');
        newCard.classList.add('card'); // Clase de estilo para la tarjeta
        newCard.innerHTML = cardTemplate;

        // Rellenar el contenido de la tarjeta con los datos del curso
        newCard.querySelector('.name-course').innerHTML = course.name;
        newCard.querySelector('.description-course').innerHTML = course.description;
        newCard.querySelector('.autor-course').innerHTML = course.teaches_name;

        // Añadir la nueva tarjeta al contenedor
        container.appendChild(newCard); 
    });

    // Actualizar el índice actual para la próxima tanda de cursos
    currentIndex += itemsPerPage;
}

// Función para eliminar los últimos cursos mostrados (Mostrar menos)
function removeCourses(container) {
    const courses = container.querySelectorAll('.card');
    const coursesToRemove = Array.from(courses).slice(-itemsPerPage);

    // Eliminar las últimas tarjetas del DOM
    coursesToRemove.forEach(course => container.removeChild(course));

    // Actualizar el índice actual
    currentIndex -= itemsPerPage;
}

// Función para mostrar/ocultar los botones "Mostrar más" y "Mostrar menos"
function updateButtons(totalCourses) {
    const loadMoreButton = document.getElementById("load-more");
    const loadLessButton = document.getElementById("load-less");

    // Mostrar u ocultar el botón "Mostrar más"
    loadMoreButton.style.display = currentIndex < totalCourses ? "block" : "none";

    // Mostrar u ocultar el botón "Mostrar menos"
    loadLessButton.style.display = currentIndex > itemsPerPage ? "block" : "none";
}

// Función principal para cargar todo cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
    // Cargar cursos iniciales
    await loadCards(); // Si loadCards es asíncrona

    // Esperar a que los botones estén disponibles
    const loadMoreButton = await waitForElement('#load-more');
    const loadLessButton = await waitForElement('#load-less');
    
    // Lógica del botón "Mostrar más"
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            const cardContainer = document.getElementById("grip-all-card");
            const courses = Controller.getCourses(); // Obtener más cursos
            displayCourses(courses, cardContainer); // Mostrar más cursos
            updateButtons(courses.length); // Actualizar los botones
        });
    }

    // Lógica del botón "Mostrar menos"
    if (loadLessButton) {
        loadLessButton.addEventListener('click', () => {
            const cardContainer = document.getElementById("grip-all-card");
            removeCourses(cardContainer); // Eliminar los últimos cursos mostrados
            updateButtons(Controller.getCourses().length); // Actualizar los botones
        });
    }
});

// Función que espera hasta que el elemento esté disponible en el DOM
function waitForElement(selector) {
    return new Promise((resolve) => {
        const observer = new MutationObserver((mutations) => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
                observer.disconnect(); // Dejar de observar cuando encontramos el elemento
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
