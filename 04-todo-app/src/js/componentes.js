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