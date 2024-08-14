let numeroSecreto = 0;
let intentos = 0;
let listadoNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos=== 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario  > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
   // utilizo el # para buscarlo por id 
   // = ""; se usa para indicar vacío
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listadoNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listadoNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los números posibles");
    } else {
    // Si el numero generado está incluido en la lista 
    if (listadoNumerosSorteados.includes(numeroGenerado)){
       return generarNumeroSecreto();
    } else {
        listadoNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}


function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

