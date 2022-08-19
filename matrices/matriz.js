/**
 * Practica JS 29/07/22
 */
// Variables globales +++++++++++++++
var matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
// let variable local 
function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c] = generarAleatorio(10, 100);
        }
    }

};

//++++++++++++++++++++++++++++++++++++++++++++++++





//++++++++++++++++++++++++++++++++++++++++++++++++
window.onload = function () {
    document.getElementById('opciones').addEventListener('change', ejecutarOpcion);
};

function ejecutarOpcion() {
    let opcion = document.getElementById('opciones').value;
    switch (opcion) {
        case '1':
        generarMatriz();
        //console.log(matriz);
            break;

        case '2':
            mostrarMatriz();
            break;
        case '3':
            diagonalPrincipal();
            break;
        case '4':

            break;
        case '5':

            break;
        case '6':

            break;
        case '7':

            break;
        case '8':

            break;
        default:
            break;

    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++


function mostrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
           let ident='f'+f+'c'+c+'d';
           //console.log(ident);
           document.getElementById(ident).innerText=matriz[f][c];
            //matriz[f][c];
    }
}
}
function diagonalPrincipal(){
    for (let f=0; f<matriz.length; f++){
            let ident='f'+f+'c'+f+'i';
            document.getElementById(ident).innerText=matriz[f][f];
}
}
//++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * Genera un numero entero aleatorio
 * entre min y max
 * @param {int} min valor minimo a generar 
 * @param {int} max valor maximo a generar
 */
function generarAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;
}


