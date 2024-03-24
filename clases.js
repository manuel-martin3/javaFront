
export class CFigura {
    pi = 3.1416;

    constructor(_tipo, _base = 0, _altura = 0, _lado = 0, _radio = 0) {
        this.radio = _radio;
        this.tipo = _tipo;
        this.base = _base;
        this.altura = _altura;
        this.lado = _lado;        
    }

    area() {
        switch (this.tipo) {
            case 'T':
                return (this.base * this.altura) / 2;
            case 'C':
                return this.pi * this.radio * this.radio;
            case 'Q':
                return this.lado * this.lado;
            default:
                return 0;
        }
    }

    detalle() {
        switch (this.tipo) {
            case 'T':
                return 'El triángulo de base: ' + this.base + ' y altura: ' + this.altura + ', tiene como área:';
            case "C":
                return 'El círculo de radio: ' + this.radio + ', tiene como área:';
            case "Q":
                return 'El Cuadrado de lado: ' + this.lado + ', tiene como área:';
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

