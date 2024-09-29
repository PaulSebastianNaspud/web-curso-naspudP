import {generateList} from "./cacheFile.js";

export class Controller {
    static coursesList = generateList();
    static instance = null;


    //Singleto para el Controlador
    constructor() {
        if (Controller.instance) {
            return Controller.instance; 
        }
        Controller.instance = this;
    }

    // Método para agregar un nuevo curso
    static addCourse(course) {
        this.coursesList.push(course);
    }

    // Método para obtener la lista de cursos
    static getCourses() {
        return this.coursesList;
    }
}
