// Variables de alcanze Global
let intentos = 0;
let numeroSecreto = generarNumeroSecreto();
let listaDeNumeros = [];
const CANTIDAD_MAXIMA = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }

    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function esNumeroRepetido(numero){
    let esIgual = false;
    let i = 0;

    while(!esIgual && i < listaDeNumeros.length){
        if(numero === listaDeNumeros[i]) {
            esIgual = true;
        } 
        i++;
    }

    return esIgual;
}

function generarNumerosUnicos(numero){
    while(esNumeroRepetido(numero)){
        numero = generarNumeroSecreto();
    }
    return numero;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreo!');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumerosUnicos(numeroSecreto);
    console.log(listaDeNumeros);
    console.log(`Numero cargado ${numeroSecreto}`);
    intentos = 1;
    listaDeNumeros.push(numeroSecreto);
    
}

function reiniciarJuego() {
    if(listaDeNumeros.length !== CANTIDAD_MAXIMA){
        limpiarCaja();
        condicionesIniciales();
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    } else {
        asignarTextoElemento('p', 'Terminaste de Jugar con todos los números!');
    }
    
}

condicionesIniciales();
