//Idea = calculadora de pesos de producto a envasar segun ley de lealtad comercial en latas de pintura
/* Segun los datos de:
- Peso especifico de producto
- Presentacion
- unidad de medida de producto a envasar (KG o LTS)
- Porcentajes admisibles 

Se determinan los valores maximos y minimos de KG a colocar en una lata de pintura.

Se agregan conceptos de Objetos y Arrays */



class OrdenDeEnvasado {
    constructor(codigo, descripcion, tamaño, pesoEspecifico) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.tamaño = tamaño;
        this.pesoEspecifico = pesoEspecifico;
    }
}

const ordenDeEnvasado1 = new OrdenDeEnvasado(340, "Lavable", 20, 1.1);
const ordenDeEnvasado2 = new OrdenDeEnvasado(350, "Lavable Satinado", 20, 1.4);
const ordenDeEnvasado3 = new OrdenDeEnvasado(210, "Profesional", 4, 1.2);
const ordenDeEnvasado4 = new OrdenDeEnvasado(310, "Economico", 1, 1.3);

const arrayOrdenDeEnvasado = [];

arrayOrdenDeEnvasado.push(ordenDeEnvasado1);
arrayOrdenDeEnvasado.push(ordenDeEnvasado2);
arrayOrdenDeEnvasado.push(ordenDeEnvasado3);
arrayOrdenDeEnvasado.push(ordenDeEnvasado4);


console.log(arrayOrdenDeEnvasado);

function menu() {
    alert("Bienvenido al sistema de Registro de pesos de latas de pintura");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Carga de Orden\n 2) Modificacion de Orden \n 3) Consulta de Orden \n 4) Calculador de pesos admisibles de lata \n 5) Salir"));
    return opcion;
}

//Función para cargar una orden

function cargaDeOrden() {
    let codigo = parseInt(prompt("Ingrese el código del producto: "));
    let descripcion = prompt("Ingrese la descripcion del producto: ");
    let tamaño = parseInt(prompt("Ingrese el tamaño del producto: "));
    let pesoEspecifico = parseInt(prompt("Ingrese el peso especifico: "));
    let ordenDeEnvasado = new OrdenDeEnvasado(codigo, descripcion, tamaño, pesoEspecifico);
    arrayOrdenDeEnvasado.push(ordenDeEnvasado);
    console.log(arrayOrdenDeEnvasado);
}


//Función para modificar una Orden

function modificacionDeOrden() {
    let codigo = parseInt(prompt("Ingrese el código de producto: "));
    let ordenDeEnvasado = arrayOrdenDeEnvasado.find( ordenDeEnvasado => ordenDeEnvasado.codigo === codigo);
    let indice = arrayOrdenDeEnvasado.indexOf(ordenDeEnvasado);
    let descripcion = prompt("Ingrese la descripcion del producto: ");
    let tamaño = prompt("Ingrese el tamaño del producto: ");
    let pesoEspecifico = parseInt(prompt("Ingrese el peso especifico: "));
    let ordenModificada = new OrdenDeEnvasado(codigo, descripcion, tamaño, pesoEspecifico);
    arrayOrdenDeEnvasado.splice(indice, 1, ordenModificada);
    console.log(arrayOrdenDeEnvasado);
}

//Función para consultar uuna orden

function consultaDeOrden() {
    let codigo = parseInt(prompt("Ingrese el codigo del producto: "));
    let OrdenDeEnvasado = arrayOrdenDeEnvasado.find(ordenDeEnvasado => ordenDeEnvasado.codigo === codigo);
    console.log(OrdenDeEnvasado);
}

//Funcion para calculador de pesos admisibles

function calculadorDePesos () {

    function calculadorDePesoMaximo (pesoEspecifico,tamaño){
        //defino caracteristicas de producto
        
        let pesoMaximo = (pesoEspecifico * tamaño * 1)
        return (pesoMaximo);
        }
        
        function calculadorDePesoMinimo1 (pesoEspecifico,tamaño){
            //defino caracteristicas de producto menor igual a 4 lts
            let pesoMinimo = (pesoEspecifico * tamaño *0.97);
            return (pesoMinimo);
            }
        
        function calculadorDePesoMinimo2 (pesoEspecifico,tamaño){
            //defino caracteristicas de producto mayor a 4 lts
            let pesoMinimo = (pesoEspecifico * tamaño *0.98);
            return (pesoMinimo);
            }
        
        let pesoEspecifico = parseFloat(prompt ("Ingrese el Peso Especifico del producto a envasar: "));
        let tamaño = parseInt (prompt("Ingrese el tamaño de la lata a envasar:"));
        
        //llamo a las funciones para que me muestre Peso Máximo y Minimo
        
        if(tamaño<=4){
        
            let pesoMinAdmisible = calculadorDePesoMinimo1 (pesoEspecifico,tamaño)
            alert("El peso minimo de envasado es: " + pesoMinAdmisible);
        
            let pesoMaxAdmisible = calculadorDePesoMaximo (pesoEspecifico,tamaño)
            alert("El peso maximo de envasado es: " + pesoMaxAdmisible);
            alert("No te pases de ese peso!!");}
        
            else if (tamaño>4){
                let pesoMinAdmisible = calculadorDePesoMinimo2 (pesoEspecifico,tamaño)
                alert("El peso minimo de envasado es: " + pesoMinAdmisible);
        
                let pesoMaxAdmisible = calculadorDePesoMaximo (pesoEspecifico,tamaño)
                alert("El peso maximo de envasado es: " + pesoMaxAdmisible);
                alert("No te pases de ese peso!!");
            }
}


//Función para salir:

function salir() {
    alert("Muchas gracias!");
}

//Ejecuto el el programa:

let opcion = menu();
switch (opcion) {
    case 1:
        cargaDeOrden();
        break;
    case 2:
        modificacionDeOrden();
        break;
    case 3:
        consultaDeOrden();
        break;
    case 4:
        calculadorDePesos();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Actualice para volver a ver las opciones");
        break;
}