
export class TodoList {
    
    // constructor clase TodoList
    constructor( ){

        this.todos = [];
        
    }
    // metodo nuevo todo 
    nuevoTodo( todo ){
        this.todos.push(todo);
    }

    // metodo eliminar todo mediante id 
    eliminarTodo( id ){
        // barremos los todos con filter 
        this.todos = this.todos.filter( todo => todo.id != id )
    }
    
    // metodo todo completado, mediante id 
    marcarCompletado( id ){
        // const idQueViene = parseInt(id); // convertimos el id que viene a numerico, esto serviría si hubiera error por la comparacion == entre el id seleccionado y el todo.id
        // barremos el arreglo con los todos 
        for(const todo of this.todos){
            console.log(id, todo.id);
            // is el id del todo es igual al id que recibimos
            if( todo.id === id ){
                // en caso de que todo completado sea true, lo dejamos en false y viceversa
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    // metodo para eliminar todo completado 
    eliminarCompletados(){

    }

}