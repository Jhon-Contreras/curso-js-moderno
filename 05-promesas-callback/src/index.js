import './styles.css';

import { buscarHeroe } from './js/callbacks';

const heroeId = 'capi';

// callbakcs: enviar funcion como argumento 

buscarHeroe( heroeId, (err, heroe) =>{
   if( err ){
        console.error(err);
   }else{
    console.log(heroe);
   }
});

console.log('Fin de programa');