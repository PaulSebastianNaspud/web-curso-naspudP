import { Course } from "../model/course.js";

export function generateList() {
    return [
        // Programación
        new Course("JavaScript Básico", "Programación", "3 meses", "Juan Pérez", "2023-09-29", { description: "Un curso introductorio a JavaScript." }),
        new Course("Python para Ciencia de Datos", "Programación", "6 meses", "Ana Gómez", "2025-01-15", { description: "Curso sobre el uso de Python en ciencia de datos." }),
        new Course("Java para Principiantes", "Programación", "4 meses", "Diego Salas", "2025-03-20", { description: "Curso básico de Java para principiantes." }),
        new Course("Programación en C#", "Programación", "5 meses", "José Rodríguez", "2024-05-10", { description: "Curso completo de C# para desarrollo de aplicaciones." }),
        new Course("Desarrollo de Aplicaciones en .NET", "Programación", "6 meses", "Luis García", "2025-07-01", { description: "Crea aplicaciones de escritorio y web usando .NET." }),
        new Course("Introducción a PHP", "Programación", "4 meses", "Sofía Torres", "2024-09-29", { description: "Aprende a crear aplicaciones web dinámicas con PHP." }),
        new Course("Fundamentos de Ruby on Rails", "Programación", "5 meses", "Fernando Ruiz", "2023-12-05", { description: "Desarrollo de aplicaciones web con Ruby on Rails." }),
        new Course("Node.js para Principiantes", "Programación", "3 meses", "Miguel López", "2024-04-15", { description: "Crea aplicaciones del lado del servidor con Node.js." }),
        new Course("Introducción a la Programación en Swift", "Programación", "4 meses", "Ana María", "2025-08-20", { description: "Curso básico de programación en Swift para iOS." }),
        new Course("Desarrollo de API REST con Django", "Programación", "5 meses", "Pablo Martínez", "2024-11-11", { description: "Aprende a construir API REST usando Django." }),

        // Diseño
        new Course("HTML y CSS", "Diseño", "2 meses", "María López", "2024-02-14", { description: "Aprende a construir sitios web con HTML y CSS.", imgSrc: "../../assets/img/course/web.jpg" }),
        new Course("Introducción al Diseño Gráfico", "Diseño", "2 meses", "Luis Hernández", "2023-10-05", { description: "Fundamentos del diseño gráfico y herramientas de diseño.", imgSrc: "../../assets/img/course/web.jpg" }),
        new Course("UX/UI Design", "Diseño", "5 meses", "Claudia Gómez", "2025-06-30", { description: "Aprende sobre la experiencia de usuario y diseño de interfaces.", imgSrc: "../../assets/img/course/web.jpg" }),
        new Course("Diseño de Experiencia de Usuario", "Diseño", "4 meses", "Sandra Martínez", "2024-03-17", { description: "Principios de diseño centrado en el usuario.", imgSrc: "../../assets/img/course/web.jpg" }),
        new Course("Fundamentos de Animación Digital", "Diseño", "3 meses", "Javier Pérez", "2024-08-21", { description: "Aprende los principios de la animación digital.", imgSrc: "../../assets/img/course/web.jpg" }),
        new Course("Diseño de Branding", "Diseño", "4 meses", "Elena Torres", "2025-02-12", { description: "Desarrolla habilidades en diseño de marca.", imgSrc: "../../assets/img/course/web.jpg" }),
        new Course("Fotografía Digital", "Diseño", "3 meses", "Carlos Jiménez", "2024-11-25", { description: "Técnicas de fotografía y edición de imágenes.", imgSrc: "../../assets/img/course/web.jpg" }),
        new Course("Illustrator para Principiantes", "Diseño", "4 meses", "Luis Figueroa", "2023-12-30", { description: "Aprende a usar Adobe Illustrator.", imgSrc: "../../assets/img/course/web.jpg" }),

        // Desarrollo Móvil
        new Course("Desarrollo de Aplicaciones Móviles", "Desarrollo Móvil", "4 meses", "Laura Fernández", "2025-04-18", { description: "Crea aplicaciones móviles con Flutter y Dart.", imgSrc: "../../assets/img/course/movil.png" }),
        new Course("Desarrollo de Aplicaciones Android", "Desarrollo Móvil", "5 meses", "José Martínez", "2023-11-14", { description: "Aprende a desarrollar aplicaciones para Android.", imgSrc: "../../assets/img/course/movil.png" }),
        new Course("Desarrollo de Aplicaciones iOS", "Desarrollo Móvil", "5 meses", "Paula Gómez", "2024-06-22", { description: "Desarrolla aplicaciones para dispositivos iOS.", imgSrc: "../../assets/img/course/movil.png" }),
        new Course("React Native para Móviles", "Desarrollo Móvil", "4 meses", "Fernando González", "2025-05-29", { description: "Desarrollo de aplicaciones móviles con React Native.", imgSrc: "../../assets/img/course/movil.png" }),

        // Inteligencia Artificial
        new Course("Introducción a la IA", "Inteligencia Artificial", "5 meses", "Carlos Ruiz", "2023-10-10", { description: "Fundamentos de inteligencia artificial y machine learning.", imgSrc: "../../assets/img/course/ia.jpg" }),
        new Course("Machine Learning con Python", "Inteligencia Artificial", "6 meses", "Patricia Sánchez", "2024-03-05", { description: "Curso avanzado de machine learning utilizando Python.", imgSrc: "../../assets/img/course/ia.jpg" }),
        new Course("Deep Learning con TensorFlow", "Inteligencia Artificial", "6 meses", "Sergio Medina", "2025-02-01", { description: "Construye modelos de deep learning con TensorFlow.", imgSrc: "../../assets/img/course/ia.jpg" }),
        new Course("Visión por Computadora", "Inteligencia Artificial", "5 meses", "María Clara", "2024-07-20", { description: "Introducción a la visión por computadora y sus aplicaciones.", imgSrc: "../../assets/img/course/ia.jpg" }),
        new Course("Procesamiento de Lenguaje Natural", "Inteligencia Artificial", "5 meses", "Julián Torres", "2023-11-30", { description: "Aprende a trabajar con texto y lenguaje natural.", imgSrc: "../../assets/img/course/ia.jpg" }),

        // Ciberseguridad
        new Course("Seguridad Informática", "Ciberseguridad", "6 meses", "Gabriel Ortega", "2025-05-10", { description: "Conoce los principios de la seguridad informática.", imgSrc: "../../assets/img/course/seguridad.jpeg" }),
        new Course("Ética Hacker", "Ciberseguridad", "4 meses", "Clara Ramírez", "2024-04-22", { description: "Fundamentos de la ética en hacking y ciberseguridad.", imgSrc: "../../assets/img/course/seguridad.jpeg" }),
        new Course("Análisis de Vulnerabilidades", "Ciberseguridad", "5 meses", "Manuel Estrada", "2025-01-01", { description: "Identificación y análisis de vulnerabilidades en sistemas.", imgSrc: "../../assets/img/course/seguridad.jpeg" }),
        new Course("Redes Seguras", "Ciberseguridad", "5 meses", "Nadia López", "2024-06-15", { description: "Principios de redes seguras y protección de datos.", imgSrc: "../../assets/img/course/seguridad.jpeg" }),

        // Marketing
        new Course("Marketing Digital", "Marketing", "3 meses", "Alberto Ríos", "2024-09-15", { description: "Estrategias de marketing digital para negocios.", imgSrc: "../../assets/img/course/marketing.png" }),
        new Course("SEO para Principiantes", "Marketing", "2 meses", "Fernando Romero", "2025-01-30", { description: "Optimización para motores de búsqueda.", imgSrc: "../../assets/img/course/marketing.png" }),
        new Course("Estrategias de Contenido", "Marketing", "3 meses", "Verónica López", "2023-12-20", { description: "Creación de contenido efectivo para marketing.", imgSrc: "../../assets/img/course/marketing.png" }),
        new Course("Gestión de Redes Sociales", "Marketing", "3 meses", "Daniela Pérez", "2024-08-25", { description: "Aprende a manejar redes sociales para empresas.", imgSrc: "../../assets/img/course/marketing.png" }),

        // Gestión
        new Course("Administración de Proyectos", "Gestión", "4 meses", "Mariana Castillo", "2023-11-11", { description: "Principios y prácticas de gestión de proyectos.", imgSrc: "../../assets/img/course/gestion.jpeg" }),
        new Course("Liderazgo y Gestión de Equipos", "Gestión", "3 meses", "Ricardo Salazar", "2024-02-15", { description: "Desarrollo de habilidades de liderazgo.", imgSrc: "../../assets/img/course/gestion.jpeg" }),
        new Course("Gestión del Cambio", "Gestión", "4 meses", "Lucía González", "2025-06-01", { description: "Técnicas y estrategias para gestionar el cambio.", imgSrc: "../../assets/img/course/gestion.jpeg" }),
    ];
}
