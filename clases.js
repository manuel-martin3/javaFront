export class CCirculo {
    pi = 3.1416;

    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return this.pi * this.radio * this.radio; // Corrección en el cálculo del área
    }

    imprimirDetalle() {
        console.log('El círculo de radio', this.radio, 'tiene como área:', this.area().toFixed(2));
    }
}

export class CEmpleado{

    constructor(codigo, nombre, cargo){
        this.codigo=codigo;
        this.nombre=nombre;
        this.cargo=cargo;
        this.estado=1;
        this.horasTrabajo=0;
        this.cantidadProyMes=0;
    }

    detalle(){
        console.log('################################################');
        console.log('datos del empleado: ');
        console.log('Código: ', this.codigo);
        console.log('Nombre: ', this.nombre);
        console.log('Cargo: ', this.cargo);
        console.log('estado: ', (this.estado==1?'Alta': 'Baja'));
        console.log('HORAS TRABAJADAS EN LA SEMANA: ', this.horasTrabajo);
        console.log('N PROYECTO EN LA QUE PARTICIPA: ', this.cantidadProyMes);
        console.log('################################################');
    }

    asignarestado(nuevo){
        this.estado=nuevo;
    }

    asignarHorastrabajo(hrsTrabajo){
        this.horasTrabajo=hrsTrabajo;
    }        

    asignarNroProyectos(nroProyectosMes){
        this.cantidadProyMes =nroProyectosMes;
    }

    evaluarDarDeBaja(){
        if (this.cantidadProyMes<5 && this.horasTrabajo<30) {
            this.asignarestado(0);
        }
    }

}


export class CFigura {
    pi = 3.1416;

    constructor(_tipo, _n1 = 0, _n2 = 0) {        
        this.tipo = _tipo;
        this.n1 = _n1;
        this.n2 = _n2;        
    }

    area() {
        switch (this.tipo) {
            case 'T':
                return (this.n1 * this.n2) / 2;
            case 'C':
                return this.pi * this.n1 * this.n1;
            case 'Q':
                return this.n1 * this.n1;
            default:
                return 0;
        }
    }

    detalle() {
        switch (this.tipo) {
            case 'T':
                return 'El triángulo de base: ' + this.n1 + ' y altura: ' + this.n2 + ', tiene como área:';
            case "C":
                return 'El círculo de radio: ' + this.n1 + ', tiene como área:';
            case "Q":
                return 'El Cuadrado de lado: ' + this.n1 + ', tiene como área:';
            default:
                return "NO EXISTE FIGURA, cálculo es: ";
        }
    }

    imprimirArea() {        
        console.log(this.detalle(), this.area().toFixed(2));        
    }
}



export class Ccalculadora{

    constructor(n1,n2){
        this.num1=n1;
        this.num2=n2;    
    }

    Operacion(ope){                
        let res= this.Calculo(ope)        
        let result = this.ImprimirResultado(ope, res);        
        console.log(result);
        
    }

    Calculo(_ope){
        let _res=0;
        switch (_ope) {
            case '+':
                _res = this.num1+this.num2;                
                break;

            case '-':
                _res = this.num1-this.num2;
                break;

            case 'X':
                _res = this.num1*this.num2;
                break;
            case '/':
                _res = this.num1/this.num2;
                break;

            default:
                res=0;
                break;
        }
        return _res;
    }        

    ImprimirResultado(_ope, _res){
        switch (_ope) {
            case '+':
                return "La suma de "+this.num1+ " y "+this.num2 + " es " + _res;

            case '-':
                return "La resta de "+this.num1+ " y "+this.num2 + " es " + _res

            case 'X':
                return "La multiplicación de "+this.num1+ " y "+this.num2 + "es " + _res
            case '/':
                return "La división de "+this.num1+ " y "+this.num2 + "es " + _res

            default:
                return " No existe operador, valor resultante es: " + _res
        }
    }
}

