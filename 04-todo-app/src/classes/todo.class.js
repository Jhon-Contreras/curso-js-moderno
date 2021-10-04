
export class Todo {
    
    // constructor clase TODO 
    constructor( tarea ){

        this.tarea = tarea;
        this.id    = new Date().getTime(); //id de acuerdo al momento exacto de creacion
        this.completado = false;
        this.creado = new Date();
        
    }
}