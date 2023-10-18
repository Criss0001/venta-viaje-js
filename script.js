import { barcelona, roma, paris, londres } from './ciudades.js' //los corchetes estos "DESESTRUCTURA" lo importado

// Obtener los elementos del DOM= Document Object Model es una representación estructurada de un doc HTML. la interaccion de esto nos va a permitir modificar el contenido en una pagina web de forma dinamica. Se organiza como un arbol de nodulos. tiene propiedades y metodos. para poder modificar para que se vea DINAMICA!!
// QUERY significa CONSULTA
// Esto Seleciona los elementos
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un evento CLICK a cada enlace (BOOCLES)
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //REMOVER ACTIVO
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });        
        //AGREGAR ACTIVE AL QUE CORRESPONDA
        this.classList.add('active')
        //TRAER LA INFORMACION DEL OBJETO CORESPONDIENTE
        let contenido = obtenerContenido(this.textContent);
        //MOSTRAR LA CIUDAD
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })
});

//función para traer info correcta desde ciudad.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}