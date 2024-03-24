import { CFigura, Ccalculadora } from './clases.js';



//   Evaluación
//###############

//PREG 1
console.log("##### PREGUNTA 1.1 ####")

const fnSuma2Num = (n1,n2)=>{
    return n1+n2;
}
let _n1 = 10;
let _n2 = 20;
console.log("La suma de los numeros "+ _n1, " y "+ _n2 + " es: " + fnSuma2Num(_n1,_n2) )
console.log(" ");

console.log("##### PREGUNTA 1.2 ####")

const fnLambdaPromedio=(arreglo)=>{
    let suma = 0;
    arreglo.forEach(numero => {
        suma += numero;
    });
    const promedio = suma / arreglo.length;
    return promedio.toFixed(2);
}

let promedioNumeros=fnLambdaPromedio([12,10,12]);
console.log('el promedio  del numeros es: ',promedioNumeros);
console.log(" ");

console.log("##### PREGUNTA 1.3 ####")

const personas = [
    { id: 1, nombre: 'Juan', apellidos: 'Pérez', dni: '12345678A', edad: 35, peso: 75 },
    { id: 2, nombre: 'María', apellidos: 'González', dni: '87654321B', edad: 45, peso: 65 },
    { id: 3, nombre: 'Pedro', apellidos: 'López', dni: '98765432C', edad: 50, peso: 80 },
    { id: 4, nombre: 'Ana', apellidos: 'Martínez', dni: '23456789D', edad: 30, peso: 60 }
];

const personasMayores = (personas) => {
    const mayores = [];
    personas.forEach(persona => {
        if (persona.edad > 40) {
            mayores.push(persona);
        }
    });

    return mayores;
};

const resultPersonas = personasMayores(personas);

console.log("Personas mayores de 40 años:");
console.log(resultPersonas);
console.log(" ");

console.log("##### PREGUNTA 1.4 ####")
let eliminada = 0;
let sumaNotas = 0;
const arregloNotas = [15, 15, 15, 10];
const CalculaPromedio = (notas) => {    
    eliminada = notas[0];    
    notas.forEach(nota => {
        sumaNotas += nota;
        if (nota < eliminada) {
            eliminada = nota;
        }
    });

    sumaNotas = sumaNotas - eliminada;
    const promedio = (sumaNotas) / (notas.length - 1);
    
    return promedio;
};

const promedioFinal = CalculaPromedio(arregloNotas);
console.log("El promedio de notas es: ", promedioFinal);
console.log("La nota eliminada es: ", eliminada);
console.log("La suma de notas es: ", sumaNotas);


// PREG 2
console.log(" ");
console.log("##### PREGUNTA 2 ####")
let objfigura = new CFigura("T",5,5,0,0)
objfigura.imprimirArea();

let objfigura2 = new CFigura("C",0,0,0,15)
objfigura2.imprimirArea();

let objfigura3 = new CFigura("Q",0,0,10,0)
objfigura3.imprimirArea();

//PREG 3
console.log(" ");
console.log("##### PREGUNTA 3 ####")
let objCalculaS = new Ccalculadora(10,2);
objCalculaS.Operacion('+');

let objCalculaR = new Ccalculadora(10,2);
objCalculaR.Operacion('-');

let objCalculaM = new Ccalculadora(10,2);
objCalculaM.Operacion('X');

let objCalculaD = new Ccalculadora(10,2);
objCalculaD.Operacion('/');