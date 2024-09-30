import { Controller } from "../../controller/controller.js";
import { Course } from "../../model/course.js";
import { lastFourCourse } from "./utltimates-courses.js";

// Función para cargar el formulario
export async function loadAddCourse() {
    try {
        const response = await fetch("src/components/add-course.html");
        const data = await response.text();
        document.getElementById("add-course").innerHTML = data;

        // Añadir el listener para el formulario después de cargarlo
        document.getElementById('course-form').addEventListener('submit', handleCourseSubmit);
    } catch (error) {
        console.error("Error al cargar el formulario:", error);
    }
}

// Función para manejar el envío del formulario
export function handleCourseSubmit(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const courseName = document.getElementById('course-name').value.trim();
    const courseCategory = document.getElementById('course-category').value.trim();
    const courseStartDate = document.getElementById('course-start-date').value.trim();
    const courseDuration = document.getElementById('course-duration').value.trim();
    const teachesName = document.getElementById('teaches-name').value.trim();
    const courseDescription = document.getElementById('course-description').value.trim();
    const courseImg = document.getElementById('course-img').value.trim();

    // Validar campos
    if (!courseName || !courseCategory || !courseStartDate || !courseDuration || !teachesName) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }

    try {
        // Crear el curso usando el Controller
        Controller.addCourse(new Course(courseName, courseCategory, courseDuration, teachesName, courseStartDate, { description: courseDescription, imgSrc: courseImg }));

        // Resetear el formulario
        document.getElementById('course-form').reset();

        alert("Curso agregado exitosamente!");
        const cardContainer = document.getElementById("list-course"); 
        cardContainer.innerHTML = "";
        lastFourCourse();
    } catch (error) {
        console.error("Error al agregar el curso:", error);
        alert("Error al agregar el curso. Por favor, inténtelo de nuevo.");
    }
}
