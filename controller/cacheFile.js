import { Course } from "../model/course.js";

export function generateList() {
    return [
        // Programación
        new Course("JavaScript Básico", "Programación", "3 meses", "Juan Pérez", { description: "Un curso introductorio a JavaScript." }),
        new Course("Python para Ciencia de Datos", "Programación", "6 meses", "Ana Gómez", { description: "Curso sobre el uso de Python en ciencia de datos." }),
        new Course("Java para Principiantes", "Programación", "4 meses", "Diego Salas", { description: "Curso básico de Java para principiantes." }),
        new Course("Programación en C#", "Programación", "5 meses", "José Rodríguez", { description: "Curso completo de C# para desarrollo de aplicaciones." }),
        new Course("Desarrollo de Aplicaciones en .NET", "Programación", "6 meses", "Luis García", { description: "Crea aplicaciones de escritorio y web usando .NET." }),
        new Course("Introducción a PHP", "Programación", "4 meses", "Sofía Torres", { description: "Aprende a crear aplicaciones web dinámicas con PHP." }),
        new Course("Fundamentos de Ruby on Rails", "Programación", "5 meses", "Fernando Ruiz", { description: "Desarrollo de aplicaciones web con Ruby on Rails." }),
        new Course("Node.js para Principiantes", "Programación", "3 meses", "Miguel López", { description: "Crea aplicaciones del lado del servidor con Node.js." }),
        new Course("Introducción a la Programación en Swift", "Programación", "4 meses", "Ana María", { description: "Curso básico de programación en Swift para iOS." }),
        new Course("Desarrollo de API REST con Django", "Programación", "5 meses", "Pablo Martínez", { description: "Aprende a construir API REST usando Django." }),

        // Diseño
        new Course("HTML y CSS", "Diseño", "2 meses", "María López", { description: "Aprende a construir sitios web con HTML y CSS." }),
        new Course("Introducción al Diseño Gráfico", "Diseño", "2 meses", "Luis Hernández", { description: "Fundamentos del diseño gráfico y herramientas de diseño." }),
        new Course("UX/UI Design", "Diseño", "5 meses", "Claudia Gómez", { description: "Aprende sobre la experiencia de usuario y diseño de interfaces." }),
        new Course("Diseño de Experiencia de Usuario", "Diseño", "4 meses", "Sandra Martínez", { description: "Principios de diseño centrado en el usuario." }),
        new Course("Fundamentos de Animación Digital", "Diseño", "3 meses", "Javier Pérez", { description: "Aprende los principios de la animación digital." }),
        new Course("Diseño de Branding", "Diseño", "4 meses", "Elena Torres", { description: "Desarrolla habilidades en diseño de marca." }),
        new Course("Fotografía Digital", "Diseño", "3 meses", "Carlos Jiménez", { description: "Técnicas de fotografía y edición de imágenes." }),
        new Course("Illustrator para Principiantes", "Diseño", "4 meses", "Luis Figueroa", { description: "Aprende a usar Adobe Illustrator." }),

        // Desarrollo Móvil
        new Course("Desarrollo de Aplicaciones Móviles", "Desarrollo Móvil", "4 meses", "Laura Fernández", { description: "Crea aplicaciones móviles con Flutter y Dart." }),
        new Course("Desarrollo de Aplicaciones Android", "Desarrollo Móvil", "5 meses", "José Martínez", { description: "Aprende a desarrollar aplicaciones para Android." }),
        new Course("Desarrollo de Aplicaciones iOS", "Desarrollo Móvil", "5 meses", "Paula Gómez", { description: "Desarrolla aplicaciones para dispositivos iOS." }),
        new Course("React Native para Móviles", "Desarrollo Móvil", "4 meses", "Fernando González", { description: "Desarrollo de aplicaciones móviles con React Native." }),

        // Inteligencia Artificial
        new Course("Introducción a la IA", "Inteligencia Artificial", "5 meses", "Carlos Ruiz", { description: "Fundamentos de inteligencia artificial y machine learning." }),
        new Course("Machine Learning con Python", "Inteligencia Artificial", "6 meses", "Patricia Sánchez", { description: "Curso avanzado de machine learning utilizando Python." }),
        new Course("Deep Learning con TensorFlow", "Inteligencia Artificial", "6 meses", "Sergio Medina", { description: "Construye modelos de deep learning con TensorFlow." }),
        new Course("Visión por Computadora", "Inteligencia Artificial", "5 meses", "María Clara", { description: "Introducción a la visión por computadora y sus aplicaciones." }),
        new Course("Procesamiento de Lenguaje Natural", "Inteligencia Artificial", "5 meses", "Julián Torres", { description: "Aprende a trabajar con texto y lenguaje natural." }),

        // Ciberseguridad
        new Course("Seguridad Informática", "Ciberseguridad", "6 meses", "Gabriel Ortega", { description: "Conoce los principios de la seguridad informática." }),
        new Course("Ética Hacker", "Ciberseguridad", "4 meses", "Clara Ramírez", { description: "Fundamentos de la ética en hacking y ciberseguridad." }),
        new Course("Análisis de Vulnerabilidades", "Ciberseguridad", "5 meses", "Manuel Estrada", { description: "Identificación y análisis de vulnerabilidades en sistemas." }),
        new Course("Redes Seguras", "Ciberseguridad", "5 meses", "Nadia López", { description: "Principios de redes seguras y protección de datos." }),

        // Marketing
        new Course("Marketing Digital", "Marketing", "3 meses", "Alberto Ríos", { description: "Estrategias de marketing digital para negocios." }),
        new Course("SEO para Principiantes", "Marketing", "2 meses", "Fernando Romero", { description: "Optimización para motores de búsqueda." }),
        new Course("Estrategias de Contenido", "Marketing", "3 meses", "Verónica López", { description: "Creación de contenido efectivo para marketing." }),
        new Course("Gestión de Redes Sociales", "Marketing", "3 meses", "Daniela Pérez", { description: "Aprende a manejar redes sociales para empresas." }),

        // Gestión
        new Course("Administración de Proyectos", "Gestión", "4 meses", "Mariana Castillo", { description: "Principios y prácticas de gestión de proyectos." }),
        new Course("Estrategias de Negocios", "Negocios", "5 meses", "Roberto Morales", { description: "Desarrolla estrategias efectivas para el crecimiento de negocios." }),
        new Course("Gestión del Cambio", "Gestión", "4 meses", "Andrés Fernández", { description: "Cómo gestionar cambios en organizaciones." }),
        new Course("Finanzas para No Financieros", "Gestión", "4 meses", "Claudia Salas", { description: "Conocimientos financieros básicos para no financieros." }),
        new Course("Liderazgo Efectivo", "Gestión", "3 meses", "Patricia Ruiz", { description: "Desarrollo de habilidades de liderazgo." })
    ];
}
