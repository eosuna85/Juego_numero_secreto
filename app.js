//+ let titulo = document.querySelector('h1');
/* Document Object Model
El DOM define la manera en que objetos y elementos se relacionan entre sí en el navegador y en el documento. El modelo de objeto de documento (DOM) es una interfaz de programación para HTML. Traduce el contenido de un documento HTML a un objeto estandarizado, al que los lenguajes de programación funcionales como JavaScript tienen facilidad de acceso y modificación.La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web.El DOM es una representación en memoria de la estructura de un documento HTML, y JavaScript puede interactuar con él para cambiar dinámicamente el contenido y la apariencia de la página.
*/
//+ titulo.innerHTML = 'Juego del número secreto';

//+ let parrafo = document.querySelector('p');
/* el metodo document conecta HTML con JS y .querySelector Selecciona el primer elemento que coincide con el valor indicado, sea clase o id. Se utiliza para seleccionar.*/
//+ parrafo.innerHTML = 'Indica un número del 1 al 10';
/* el .innerHTML nos permite insertar un texto al objeto*/

let nuemroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(nuemroSecreto);

function asignarTextoElemento(elmento, texto){
    let elmentoHTML = document.querySelector(elmento);
    elmentoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroIntentos);
    // console.log(typeof(numeroDeUsuario));
    // console.log(typeof(nuemroSecreto));
    // console.log(numeroDeUsuario);
    // console.log(nuemroSecreto);
    // console.log(numeroDeUsuario === nuemroSecreto);
    if (numeroDeUsuario === nuemroSecreto){
    asignarTextoElemento('p',`Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento': 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //Cuando el Usuario no acerto
        if (numeroDeUsuario > nuemroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p','El núemro secreto es mayor.')
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;    
}

function limpiarCaja(){
    //querySelector es un selector universal y para usarlo de forma especifica como getElementById que va directamente a seleccionar por la id del atributo a trabajar, utilizamos # para referirnos a la id
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    //document.querySelector('#valorUsuario').value = ''; --- otra forma de escribir la linea anterior.
}

function generarNumeroSecreto(){
    //let nuemroSecretoFun = Math.floor(Math.random()*10)+1;
    //return nuemroSecretoFun;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si el numero generado esta incluido en la lista hacemos esta accion
    // si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.')
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //recursividad
        } else {//sino hacemos esta
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!')
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`)
    nuemroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();