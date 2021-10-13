
// esperar a que el sitio sea cargado 
window.onload = () => {
    // scripts

    const nuevoH2 = document.createElement('h2');
    nuevoH2.innerText = "Clase de DOM";

    document.body.append(nuevoH2)
    console.log(nuevoH2.innerHTML = '<li> opcion 1</li><li> opcion 1</li>');
}