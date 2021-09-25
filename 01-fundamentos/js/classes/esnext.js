
class Rectangulo {
    // propiedad privada #propiedad: permite no ser sobreescribido fuera de la clase
    #area = 0;

    constructor(base = 0, altura= 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
    calcularArea(){
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);
rectangulo.area = 100;

rectangulo.calcularArea();
console.log(rectangulo);