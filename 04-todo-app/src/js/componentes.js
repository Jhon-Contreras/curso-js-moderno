import { Todo } from "../classes";
import { todoList } from "../index";

// Referencias html 
const ulTodoList           = document.querySelector('.todo-list'); //instanciamos al ul que contiene las listas
const txtInput             = document.querySelector('.new-todo'); // input nuevo Todo
const btnBorrarCompletados = document.querySelector('.clear-completed'); // boton borrar completados
const ulFiltros            = document.querySelector('.filters'); // botones filtros 
const ahrefFiltros         = document.querySelectorAll('.filtro'); // ahref filtros 

export const countTodo = document.querySelector('.todo-count');  // item contador



// funcion crear todo, recibimos un todo 
export const crearTodoHtml = ( todo ) => {

    // creamos el html del li 
    // mediante condición ternaria, decimos si todo es completado, que agregue completed a la clase y checked al input
    // en caso que no esté completado, dejamos  vacio en ambos campos ' ' 
    const htmlTodo = `
                    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }"> 
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }> 
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`
    
    const div = document.createElement('div'); //creamos un div para poder incrustar el li en la lista
    div.innerHTML = htmlTodo;
    
    ulTodoList.append(div.firstElementChild); //Insertar el primer hijo (li ya creado)
   
    return div.firstElementChild;

}


// Eventos 
// evento enter al crear un Todo 
txtInput.addEventListener('keyup', (event) => {
    // event.keycode sirve para detectar las teclas presionadas por el usuario,
    // event.keycode === 13 es el keycode de la tecla enter 
    // condicion para evaluar si el event.keycode === 13 entonces la persona presionó enter y si está vacio el campo

    if ( event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value);
        // creamos el nuevo Todo 
        const nuevoTodo = new Todo( txtInput.value );
        // llamamos el metodo del todoList nuevoTodo 
        todoList.nuevoTodo( nuevoTodo);
        
        // llamamos al metodo crearTodoHtml 
        crearTodoHtml( nuevoTodo );
        // limpiamos el campo 
        txtInput.value = ' ';
    }

});

// evento completar Todo y borrar Todo

ulTodoList.addEventListener('click', ()=>{
    const nombreElemento = event.target.localName;//con esto identificamos en que parte hicimos click
    const todoElemento = event.target.parentElement.parentElement; //identificamos el elemento parent para obtener solo el li seleccionado
    const todoId = todoElemento.getAttribute('data-id'); //obtenemos el atributo del html
    
    // click en el check 
    if (nombreElemento.includes('input') ) {
        // llamamos al metodo marcarCompletado y marcamos como completado el Todo 
        todoList.marcarCompletado( todoId );
        // agregamos la clase css completed
        todoElemento.classList.toggle('completed');

    } else if(nombreElemento.includes('button')){ // si clickeanmos el boton eliminar 
      
        // borramos el todo de acuerdo al id del Todo llamando al meotodo eliminarTodo
        todoList.eliminarTodo(todoId);
        // además, removemos el elemento en cuestion 
        ulTodoList.removeChild(todoElemento);

    } 
   console.log(todoList);
})

// evento borrar todos los completados 

btnBorrarCompletados.addEventListener('click', () =>{
    
    todoList.eliminarCompletados();
    // hacemos referencia a todos los hijos que tiene el ulTodoList 
    //empezaremos desde la ultima posicion para no alterar los indices de los demás Todo's (length-1)
    for(let i = ulTodoList.children.length - 1; i >= 0; i--){
        // creamos una constante del elemento hijo en el indice i 
        const elemento = ulTodoList.children[i];
        
        // preguntamos si el elemento hijo contiene la clase 'completed' en su etiqueta 
        if (elemento.classList.contains('completed') ) {
            // si la tiene, removemos el elemento 
           ulTodoList.removeChild(elemento);
        } 
    }

});

// eventos botones filtros 
ulFiltros.addEventListener('click', (event)=>{

    // Const que contiene el texto de el elemento de los filtros 
    // event.target.text = event.target es el a href, event.target.text es el texto del href 
    const filtro = event.target.text;
    // si el filtro no existe entonces hacemos un return para no hacer nada, esto para cuando se selecciona fuera de los botones del ul filters 
    if (!filtro) return;


    
    for( const elemento of ulTodoList.children ){
        
        // removemos la clase hidden (establecida en css) 
        elemento.classList.remove('hidden');
        // constante para definir si los elementos contienen la clase completed 
        const completado = elemento.classList.contains('completed');

        // barrimos cada a href y borramos la clase selected 
        ahrefFiltros.forEach( elem => elem.classList.remove('selected'));
        // esto hace referencia al a href (no al texto como antes ) 
        event.target.classList.add('selected');

        // switch para controlar las decisiones, evaluando mediante el filtro actual (completado, pendientes) 
        switch( filtro ) {
            // si el texto que viene en el filtro es Pendientes 
            case 'Pendientes':
                if ( completado ) {
                    // ocultamos los items que contengan este texto 
                    elemento.classList.add('hidden')
                   
                }
            break;

             // si el texto que viene en el filtro es Completados
            case 'Completados':
                // lo contrario de completado, o en este caso, sin class completed 
                if ( !completado ) {
                    // ocultamos los items que contengan este texto 
                    elemento.classList.add('hidden')
                    
                }
            break;

            // como no es ninguna de estas dos, remueve la clase hidden de todos los elementos en la linea 114 
        }

    }
});


