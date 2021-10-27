// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";
import * as CRUD from './js/crud-provider';

// init();

CRUD.getUsuario( 2 ).then( console.log );

CRUD.crearUsuario({
    name: 'Jhon',
    job: 'Developer nefasto'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Josesito',
    job: 'Developer'
}).then(console.log);