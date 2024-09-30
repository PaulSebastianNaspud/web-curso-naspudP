import { loadAddCourse } from "./addCourse.js";
import { loadList } from "./list-course.js";
import { lastFourCourse } from "./utltimates-courses.js";

async function loadHeader() {
    try {
        const response = await fetch("src/sections/header.html");
        const data = await response.text();
        document.getElementById("header-container").innerHTML = data;
    } catch (error) {
        console.error("Error al cargar el header:", error);
    }
}

async function loadMainContainer() {
    try {
        const response = await fetch("src/sections/main-container.html");
        const data = await response.text();
        document.getElementById("main-container").innerHTML = data;
    } catch (error) {
        console.error("Error al cargar el contenedor principal:", error);
    }
}

async function loadFooter() {
    try {
        const response = await fetch("src/sections/footer.html");
        const data = await response.text();
        document.getElementById("footer-container").innerHTML = data;
    } catch (error) {
        console.error("Error al cargar el footer:", error);
    }
}

// Unificar la carga de componentes en un solo evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadHeader(),
        loadMainContainer(),
        loadFooter(),
        loadAddCourse(),
        loadList(),
        lastFourCourse()
    ]);
});
