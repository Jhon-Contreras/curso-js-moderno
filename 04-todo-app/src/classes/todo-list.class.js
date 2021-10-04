import { Todo } from "./todo.class";

export class TodoList {
    
    // constructor clase TodoList
    constructor( ){

        // this.todos = [];
        this.cargarLocalStorage()
        
    }
    // metodo nuevo todo 
    nuevoTodo( todo ){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    // metodo eliminar todo mediante id 
    eliminarTodo( id ){
        // barremos los todos con filter 
        // regresamos un nuevo arreglo excluyendo el todo que coincida con el id 
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }
    
    // metodo todo completado, mediante id 
    marcarCompletado( id ){
        // const idQueViene = parseInt(id); // convertimos el id que viene a numerico, esto serviría si hubiera error por la comparacion == entre el id seleccionado y el todo.id
        // barremos el arreglo con los todos 
        for(const todo of this.todos){
            console.log(id, todo.id);
            // is el id del todo es igual al id que recibimos
            if( todo.id == id ){
                // en caso de que todo completado sea true, lo dejamos en false y viceversa
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    // metodo para eliminar todo completado 
    eliminarCompletados(){
        // necesitamos todos los todos NO completados !todo.completado (negacion)
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    // metodo para guardar en el local storage 
    guardarLocalStorage(){
        // guardamos nuestros todos al localStorage , transformandolo en JSON para recuperar la data
        localStorage.setItem('todo', JSON.stringify( this.todos ) );

    }

    // metodo para cargar info desde el local storage 
    cargarLocalStorage(){
         // volvemos el array de todo's a su estado normal con JSON.parse 
        // if (localStorage.getItem('todo')) {
           
        //     this.todos = JSON.parse(localStorage.getItem('todo')) ;
        //     console.log('cargar localstorage', this.todos);

        // } else{
        //     this.todos = [];
        // }

        // version limpia ternaria 
        // si this.todos es igual a esto             has   esto                            caso contrario devuelve el arreglo de todos vacio 
        this.todos = (localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [])

        // reconstruimos la instancia en localStorage 
        //el .map permite barrer cada uno de los elementos que estan dentro de un arreglo y retornar un nuevo arreglo mutado
        //hacemos que this.todos sea igual a un arreglo mutado, que recibe esta nueva instancia de los todos desde el metodo  static fromJson
        this.todos = this.todos.map( Todo.fromJson )
    }

}