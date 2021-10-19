import './styles.css';

import { buscarHeroe } from './js/callbacks';

const heroId = 'capi';

// callbakcs: enviar funcion como argumento 

buscarHeroe( heroId, (heroe) =>{
    console.log(heroe);
});

console.log('Fin de programa');