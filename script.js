import{barcelona,roma,paris,londres} from './ciudades.js';


//obtener elementos del DOM = DOCUMENT OBJECT MODEL 

let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById("titulo");

let subtituloElemento = document.getElementById('subtitulo');

let parrafoElemento = document.getElementById('parrafo');

let precioElemento = document.getElementById('precio');

//agg un evento CLICK a cada enlace
enlaces.forEach(function(enlace){

    enlace.addEventListener('click', function(){

            //remover activo de todas las clases 
            enlaces.forEach(function (enlace) {
                enlace.classList.remove('active')
            });

            //agregar CLASE 'active' al enlace acual

            this.classList.add('active');

            //obtener el contenido correspondiente segun el enlace

            let contenido = obtenerContenido(this.textContent);

            tituloElemento.innerHTML = contenido.titulo;
            subtituloElemento.innerHTML = contenido.subtitulo;
            parrafoElemento.innerHTML = contenido.parrafo;
            precioElemento.innerHTML = contenido.precio;


            //MOSTRAR EL CONTENIDO EN EL DOM

    })

    
});



//funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace){
    let contenido = {

        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido[enlace];
}