var disminuir = document.querySelector('#decrease'); // creamos variable llamando al boton decrease con su id respectivo
var incrementar = document.querySelector('#increase'); //creamos variable llamando al boton increase con su id respectivo
var reinicia = document.querySelector('#reset'); //creamos variable llamando al boton reset con su id
var visor = document.querySelector('#counter-label') //creamos una varible en el cual llamamos al visor creado en html, en este imprimiremos nuestro contador
var contador = 0; //creamos una variable contador para llevar el registro de los click que haremos

function printDisminuir(){ //creamos funcion para boton decrease
    contador--; //le asignamos su funcion de disminuir la variable contador
    visor.innerHTML = contador; // indicamos a funcion que muestre el contador en la variable visor, que lo envia al counter-label de html
}

function printAumentar(){ //creamos funcion para boton increase
    contador++; //le asignamos su funcion de aumentar la variable contador
    visor.innerHTML = contador; // indicamos a funcion que muestre el contador en la variable visor, que lo envia al counter-label de html
}

function printReset(){ //creamos funcion para boton reset
    contador = 0;  //le asignamos su funcion de resetear la variable contador
    visor.innerHTML = contador;  // indicamos a funcion que muestre el contador en la variable visor, que lo envia al counter-label de html
}

disminuir.addEventListener('click', printDisminuir);

incrementar.addEventListener('click', printAumentar);

reinicia.addEventListener('click', printReset);