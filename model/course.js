export class Course {
    constructor(name, category, duration_course, teaches_name, startDate, { description = "", imgSrc = "../../assets/img/course/default-img.jpg" } = {}) {
        this.name = name;                  
        this.category = category;           
        this.duration_course = duration_course; 
        this.teaches_name = teaches_name;
        this.startDate = startDate;      
        this.description = description;     
        this.imgSrc = imgSrc;              
    }
}
