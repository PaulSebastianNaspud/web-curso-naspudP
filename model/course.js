export class Course {
    constructor(name, category, duration_course, teaches_name, { description = "", imgSrc = "" } = {}) {
        this.name = name;                  
        this.category = category;          
        this.duration_course = duration_course; 
        this.teaches_name = teaches_name;  
        this.description = description;    
        this.imgSrc = imgSrc;             
    }
}
