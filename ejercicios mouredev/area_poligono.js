/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
*/


//crear una funcion
//crear un poligono
    //- indicar que tipo de poligono es
    //- indicar los datos
    //  -en el caso del cuadrado lado
    //  -en el caso del triangulo base y altura
    //  -en el caso del rectangulo base y lado(altura)     


function calcularAreaPoligono(poligono) {

    switch(poligono.tipo) {
        case 'triangulo':
            return (poligono.base * poligono.altura / 2);
        
        case 'cuadrado':
            return (poligono.lado * poligono.lado);
        
        case 'rectangulo':
            return (poligono.base * poligono.altura);
    }

}

//poligono
const triangulo = {
    base: 10, 
    altura: 5,
    tipo: 'triangulo'
};

const cuadrado = {
    lado: 5,
    tipo: 'cuadrado'
};

const rectangulo = {
    base: 8, 
    altura: 4,
    tipo: 'rectangulo'
};


const areaTriangulo = calcularAreaPoligono(triangulo);
console.log(areaTriangulo);

const areaCuadrado = calcularAreaPoligono(cuadrado);
console.log(areaCuadrado);

const areaRectangulo = calcularAreaPoligono(rectangulo);
console.log(areaRectangulo);
