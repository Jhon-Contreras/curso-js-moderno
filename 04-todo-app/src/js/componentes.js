import { Todo } from "../classes";
import { todoList } from "../index";

// Referencias html 
const ulTodoList = document.querySelector('.todo-list'); //instanciamos al ul que contiene las listas
const txtInput = document.querySelector('.new-todo');

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
        // borramos el todo de acuerdo al id del Todo 
        todoList.eliminarTodo(todoId);
        // además, removemos el elemento en cuestion 
        ulTodoList.removeChild(todoElemento);
    }
   console.log(todoList);
})