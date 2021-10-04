

import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();


// reconstruimos el html 
// 
// todos es el arreglo que contiene los todos 
// el forEach regresa el primer argumento de crearTodoHtml 
todoList.todos.forEach( crearTodoHtml);