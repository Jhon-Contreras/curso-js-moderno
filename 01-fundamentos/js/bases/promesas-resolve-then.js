// PROMESAS son un objeto que representan un valor que eventualmente se resolverá

// constante global llamada Promise 
// nos permite resolver de manera asincrona valores 

const p1 = Promise.resolve(1)
console.log(p1);

p1
    .then(x => x + 5)
    .then(x => Promise.resolve(x + 5))
    .then(x => Promise.reject('Error')) //si devolvemos una promesa que se rechaza, pasará al catch del final
    .then(x => console.log('esto no se llamará'))
    .catch(e => console.log(e))

                                                
const delayed = x => new Promise((resolve, reject) => setTimeout( ()=> resolve(x), 1500))

delayed(7) //se toma 1500 ms para imprimir 7
    .then(x => {
        console.log(x);
        return delayed(x + 7) //en este then se toma 1500 ms más para mostrar el resultado de 14
    })
    .then(x => console.log(x))
    .then(x => Promise.reject('Error inesperado'))
    .catch(e => console.log(e))