import { Controller } from "../../controller/controller.js";

let cardTemplate = ''; // Variable para almacenar la plantilla de la tarjeta

// Función para cargar y listar los últimos 4 cursos
export function lastFourCourse() {
    fetch("./src/components/card-course.html")
        .then(response => response.text())
        .then(card => {
            cardTemplate = card; // Almacenar la plantilla
            const cardContainer = document.getElementById("list-course"); 
            const courses = Controller.getCourses(); // Obtener los cursos

            // Obtener los últimos 4 cursos
            const lastFourCourses = courses.slice(-4); 

            // Mostrar los últimos 4 cursos
            lastFourCourses.forEach(course => {
                let newCard = document.createElement('div');
                newCard.classList.add('card-course-item'); // Clase de la tarjeta
                newCard.innerHTML = cardTemplate;

                // Rellenar con datos del curso
                newCard.querySelector('.name-course').innerHTML = course.name;
                newCard.querySelector('.description-course').innerHTML = course.description || "Descripción no disponible";
                newCard.querySelector('.autor-course').innerHTML = course.teaches_name;
                newCard.querySelector('.img-course').src = course.imgSrc || "../../assets/img/course/default-img.jpg";

                // Crear elementos para duración, fecha de inicio y categoría (inicialmente ocultos)
                const durationElement = document.createElement('div');
                durationElement.classList.add('course-duration');
                durationElement.style.display = "none"; // Ocultar por defecto
                durationElement.innerHTML = `Duración: ${course.duration_course}`;

                const startDateElement = document.createElement('div');
                startDateElement.classList.add('course-start-date');
                startDateElement.style.display = "none"; // Ocultar por defecto
                startDateElement.innerHTML = `Inicio: ${course.startDate}`;

                const categoryElement = document.createElement('div');
                categoryElement.classList.add('course-category');
                categoryElement.style.display = "none"; // Ocultar por defecto
                categoryElement.innerHTML = `Categoría: ${course.category}`;

                // Crear y añadir botón para mostrar más detalles
                const detailButton = document.createElement('button');
                detailButton.textContent = "Mostrar Detalles";
                detailButton.classList.add('btn-load');

                // Añadir funcionalidad al botón para alternar los detalles
                detailButton.onclick = () => {
                    toggleCourseDetails(detailButton, durationElement, startDateElement, categoryElement);
                };

                // Añadir el botón y los detalles directamente a la tarjeta
                newCard.appendChild(detailButton);
                newCard.appendChild(durationElement);
                newCard.appendChild(startDateElement);
                newCard.appendChild(categoryElement);

                // Añadir al contenedor
                cardContainer.appendChild(newCard);
            });
        })
        .catch(error => console.error("Error al cargar los cursos:", error));
}

// Función para alternar detalles del curso
function toggleCourseDetails(button, durationElement, startDateElement, categoryElement) {
    // Alternar la visibilidad de los elementos
    if (durationElement.style.display === "none") {
        durationElement.style.display = "block"; // Mostrar duración
        startDateElement.style.display = "block"; // Mostrar fecha de inicio
        categoryElement.style.display = "block"; // Mostrar categoría
        button.textContent = "Ocultar Detalles"; // Cambiar el texto del botón
    } else {
        durationElement.style.display = "none"; // Ocultar duración
        startDateElement.style.display = "none"; // Ocultar fecha de inicio
        categoryElement.style.display = "none"; // Ocultar categoría
        button.textContent = "Mostrar Detalles"; // Cambiar el texto del botón
    }
}
