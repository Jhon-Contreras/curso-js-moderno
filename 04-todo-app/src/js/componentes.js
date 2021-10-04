// Referencias html 

const ulTodoList = document.querySelector('.todo-list'); //instanciamos al ul que contiene las listas

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