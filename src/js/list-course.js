import { Controller } from "../../controller/controller.js";

export async function loadList() {
    let currentIndex = 0; // Índice actual de cursos
    const itemsPerPage = 8; // Número de cursos a mostrar por vez
    let cardTemplate = ''; // Variable para almacenar la plantilla de la tarjeta
    let displayedCourses = []; // Array para almacenar las tarjetas mostradas

    // Función para cargar la plantilla de la tarjeta
    async function loadCards() {
        try {
            const response = await fetch("./src/components/card-course.html");
            cardTemplate = await response.text(); // Almacena la plantilla de la tarjeta
            const cardContainer = document.getElementById("grip-all-card");
            const courses = Controller.getCourses(); // Obtiene la lista de cursos

            // Mostrar los cursos iniciales
            displayCourses(courses, cardContainer);
            // Actualizar los botones "Mostrar más" y "Mostrar menos"
            updateButtons(courses.length);
        } catch (error) {
            console.error("Error al cargar las tarjetas:", error);
        }
    }

    // Función para mostrar cursos en la página
    function displayCourses(courses, container) {
        const coursesToDisplay = courses.slice(currentIndex, currentIndex + itemsPerPage);

        // Agregar los cursos mostrados al array
        displayedCourses.push(...coursesToDisplay);

        coursesToDisplay.forEach(course => {
            const newCard = document.createElement('div');
            newCard.classList.add('card-course-item'); // Clase de estilo para la tarjeta
            newCard.innerHTML = cardTemplate;

            // Rellenar los datos del curso
            newCard.querySelector('.name-course').innerHTML = course.name || "Nombre no disponible";
            newCard.querySelector('.description-course').innerHTML = course.description || "Descripción no disponible";
            newCard.querySelector('.autor-course').innerHTML = course.teaches_name || "Autor no disponible";
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
            container.appendChild(newCard);
        });

        currentIndex += itemsPerPage; // Actualiza el índice
    }

    // Función para mostrar/ocultar detalles del curso
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

    // Función para manejar la carga y eliminación de cursos
    function handleLoadMore(container, totalCourses) {
        const loadMoreButton = document.getElementById("load-more");
        const loadLessButton = document.getElementById("load-less");

        loadMoreButton.onclick = () => {
            displayCourses(Controller.getCourses(), container);
            updateButtons(totalCourses);
        };

        loadLessButton.onclick = () => {
            removeLastCourses(container, itemsPerPage); // Eliminar el mismo número que se mostró
            updateButtons(totalCourses);
        };
    }

    // Función para eliminar los últimos cursos mostrados
    function removeLastCourses(container, numToRemove) {
        for (let i = 0; i < numToRemove && container.firstChild; i++) {
            container.removeChild(container.lastChild); // Elimina el último hijo
        }
        currentIndex -= numToRemove; // Actualiza el índice
    }

    // Función para mostrar/ocultar botones
    function updateButtons(totalCourses) {
        const loadMoreButton = document.getElementById("load-more");
        const loadLessButton = document.getElementById("load-less");

        loadMoreButton.style.display = currentIndex < totalCourses ? "block" : "none";
        loadLessButton.style.display = displayedCourses.length > 0 ? "block" : "none"; // Mostrar "Mostrar menos" si hay cursos mostrados
    }

    // Cargar cursos iniciales
    await loadCards(); // Cargar las tarjetas
    const cardContainer = document.getElementById("grip-all-card");
    handleLoadMore(cardContainer, Controller.getCourses().length); // Manejar eventos de carga
}
