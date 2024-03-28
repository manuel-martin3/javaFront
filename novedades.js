import { CCirculo, CEmpleado, CFigura, Ccalculadora } from './clases.js';


console.log('bienvenidos al curso de Java Front cap1');
console.log('novedades del ecmajs');

//novedad let: ambito por bloque {}
function suma(arreglo){
    let resultado=0;

    for (let i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i];
    }

    return resultado;
}


let numeros=[2,4,6,8];
console.log(numeros);
console.log('la suma de los elementos del arreglo numeros es',suma(numeros));

//novedad const: ambito bloque y no cambia en tiempo de ejecucion para variable primitivas.
let objetoCirculo={
    area:function(radio){
        const PI=3.1416;  // PI*Math.pow(radio,2);
        return  PI*radio*radio;
    },
    descripcion:"tipo de objeto circulo"
}

let r=10;
let areaCirculo=objetoCirculo.area(r);
console.log(objetoCirculo.descripcion);
console.log('radio circulo',r,' cuya area es',areaCirculo);

objetoCirculo.descripcion="es una figura geometrica";
console.log(objetoCirculo.descripcion);

const arregloN=[1,2,3];
arregloN.push(4);
console.log(arregloN);

const radioC=20;
// radioC=40; no es valido cambiar
console.log(radioC);

//una funcion en js tambien es un const 
// funcion anonima
const fnAnonimaSuma=function (arregloNumeros){
    let resultado=0;

    for (let i = 0; i < arregloNumeros.length; i++) {
        resultado += arregloNumeros[i];
    }

    console.log('uso de funcion anonima, el arreglo es', arregloNumeros);
    console.log('la suma es', resultado);
}

let elementosN=[8,10,12,20];
fnAnonimaSuma(elementosN);
fnAnonimaSuma([10,20,30]);

// novedades function arrow (flecha o lambda) ()=>{}
const fnLambdaSuma=(arreglo)=>{
    let resultado=0;
    resultado =arreglo.reduce((i,v)=>i+v,0);
    console.log('funcion lambda v3 el arreglo es',arreglo);
    console.log('suma es',resultado);
}

fnLambdaSuma([10,20,30]);
fnLambdaSuma([1,2,3]);

console.log('numeros:', numeros);
let numerosAlCuadrado=numeros.map((n)=>n*n);
console.log('arreglo con elementos al cuadrado',numerosAlCuadrado);

//funcion lambda que permita elevar al cuadrado un numero.
const fnCuadrado=(x)=>{
    return x*x;
}

const fnElevaCuadradoArreglo=(arreglo)=>{
    let arregloCuadrado =arreglo.map((n)=>fnCuadrado(n));
    console.log('arreglo original', arreglo);
    console.log('funcion que devuelve arreglo elementos al cuadrado',arregloCuadrado);
}

fnElevaCuadradoArreglo(numeros);
fnElevaCuadradoArreglo([1,2,7]);
fnElevaCuadradoArreglo([8,3]);

//ejercicio: generar una funcion lambda que devuelva un arreglo con elementos de la siguiente manera:
// si el valor del elemento del arreglo es par eleve al cubo y si es impar lo eleve al cuadrado.
// la funcion recibe como parametro el arreglo original.

const fnDevuelveArregloModificado=(arreglo)=>{
    let arregloModifica=arreglo.map((x)=>fnModifica(x));
    return arregloModifica;
}

const fnCubo=(n)=>{
    return n*n*n;
}

const fnModifica=(n)=>{
    return (n%2===0?fnCuadrado(n):fnCubo(n));
}

let numerosAProbar=[2,1,5,13];
console.log('arreglo a Probar',numerosAProbar);
console.log('arreglo modificado',fnDevuelveArregloModificado(numerosAProbar));

let dato=70;
console.log(dato);

const sumaD=(...resto)=>{
    let resultado = 0;
    resto.forEach((a)=>resultado +=a);
    console.log('la suma usando el resto es: ', resultado)

}

sumaD(15,18,20,10,7);


const fnOperadorMovilCostoMensual = (operador = "movistar", nombrecliente = "Juan Perez", costoinicial = 0, plan = "post-pago") => {
    let salida = "Bienvenido a " + operador + ", cliente: " + nombrecliente;
    let costoMensual = 0;
    let costoVariable = 120;

    switch (plan) {
        case "post-pago":
            costoMensual = costoinicial + costoVariable;
            break;

        case "pre-pago":
            costoMensual = costoinicial;
            break;

        default:
            console.log('Plan desconocido');
            return; // Salir de la función si el plan no es reconocido
    }

    console.log(salida + ', el costo mensual calculado es: ' + costoMensual);
}


fnOperadorMovilCostoMensual("claro","angelica vargas", 80, "pre-pago");
fnOperadorMovilCostoMensual(undefined,"angelica vargas", 80, "pre-pago");
fnOperadorMovilCostoMensual();


//fnevaluarCostoMensualxOperador
let cliente1={
    nombre: "Julio Ramirez Lozano",
    costoinicial:10,
    plan:"post-pago"
}

let cliente2={
    nombre: "Luisa RiveraRodriguez",
    costoinicial:40,
    plan:"pre-pago"
}

let cliente3={
    nombre: "María Najhar Polo",
    costoinicial:20,
    plan:"post-pago"
}

let cliente4={
    nombre: "Angela Rivas Polo",
    costoinicial:36,
    plan:"post-pago"
}


const clientes = [cliente1,cliente2,cliente3,cliente4];

const fnevaluarCostoMensualxOperador=(arreglo, operador)=>{
    arreglo.forEach((c)=>{
        fnOperadorMovilCostoMensual(operador, c.nombre,c.costoinicial, c.plan);
    });
}

fnevaluarCostoMensualxOperador(clientes);


let objCirculo = new CCirculo(10);
objCirculo.imprimirDetalle();

let emp1 =new CEmpleado('COD011','MARIO POLO DÁVILA', 'GESTOR');
emp1.asignarHorastrabajo(20);
emp1.asignarNroProyectos(6)
emp1.evaluarDarDeBaja()
emp1.detalle();

let emp2 =new CEmpleado('COD012','JUAN PERES AREAS', 'GESTOR');
emp2.asignarHorastrabajo(25);
emp2.asignarNroProyectos(2)
emp2.evaluarDarDeBaja();
emp2.detalle();
console.log(" ");
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
let objfigura = new CFigura("T",5,5)
objfigura.imprimirArea();

let objfigura2 = new CFigura("C",10)
objfigura2.imprimirArea();

let objfigura3 = new CFigura("Q",10)
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
