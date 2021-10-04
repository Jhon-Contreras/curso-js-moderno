
export class Todo {
    // Para reconstruir instancias de todo's, debido a que al cargar los todos desde el localStorage, estos pierden su
    // forma y se transforman en un objeto 
    // metodo estatico
    static fromJson( { id, tarea, completado, creado } ){
        // creamos la instancia 
        const temporalTodo = new Todo(tarea);

        temporalTodo.id = id;
        temporalTodo.completado = completado;
        temporalTodo.creado = creado;

        // regresamos la instancia 
        return temporalTodo;
    }

    // constructor clase TODO 
    constructor( tarea ){

        this.tarea = tarea;
        this.id    = new Date().getTime(); //id de acuerdo al momento exacto de creacion
        this.completado = false;
        this.creado = new Date();
        
    }
}