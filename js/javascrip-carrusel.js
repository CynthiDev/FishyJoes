const fila = document.querySelector('.contenedorCarrusel');
const imgsCarrusel = document.querySelectorAll('.boxImgCarrusel');

const flechaIzquierda = document.getElementById('flechaL'); //importante que este nen -id
const flechaDerecha = document.getElementById('flechaR');



/* comando para ver el ancho de carrusel
document.querySelector('.contenedorCarrusel').offsetWidth
*/


//en el css tiene que estar "overflowhidden"

//-------------even listener para la flecha derecha----------------
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    //para que  el indicador se active con el click de las flechas
    const indicadorActivo = document.querySelector('.indicadores .activo'); //almaceno el indicador activo
    if (indicadorActivo.nextSibling) { //preguntamos si el indicador activo tiene un "elemento a la derecha" ( si es el ultimo elemeno , el codigo no se ejecuta)
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//-------intento de triggerr-----------
// $("#flechaR").trigger("click");


// tiempo expresado en milisegundos
var tiempoClick = 5000;
// intervalo con set
var interval = setInterval(function () {
    $("#flechaR").trigger("click");
}, tiempoClick);



//-------------even listener para la flecha izquierda---------------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo'); //almaceno el indicador activo
    if (indicadorActivo.previousSibling) { //preguntamos si el indicador activo tiene un "elemento a la izquerda" ( si es el primer elemeno , el codigo no se ejecuta)
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});






//--------------paginacion--------------------------------------

//calculamos cuantas paginas necesitamos (MUY IMPORTANTE PARA EL RESPONSIVE)
const numeroPaginas = Math.ceil(imgsCarrusel.length / 1);  //entre la cantidad de las imagenes que se muestran (saldria 2 paginas)
//uso mathh ceil para redondear para arriba

//ahora hacemos un arreglo  para añadir button por cada pagina
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');


    if (i === 0) {
        indicador.classList.add('activo');
    }
    //agregamos el boton
    document.querySelector('.indicadores').appendChild(indicador);
    //y ahora le agramos un eventlistener
    indicador.addEventListener('click', (e) => { //cuando se accede a e ejecuta
        fila.scrollLeft = i * fila.offsetWidth;  //esto hace que al hacer clic en los paginadores se mueve hacia la izq

        //tambien  queremos que el  activo primero se borre y agregamos activo en el paginador correspondiente
        document.querySelector('.indicadores .activo').classList.remove('activo'); //elimino clase activo
        e.target.classList.add('activo'); //agregamos activo en el parametro "e" clikeado

    })

}

//----------------agregamos el hover  al as imagenes (opcional)--------------
/*
imgsCarrusel.forEach((imgCarrusel) => {   //por cada elemento que esta en el parametro del foreach
    imgCarrusel.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            imgsCarrusel.forEach(imgCarrusel => imgCarrusel.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200);
    });
});

fila.addEventListener('mouseleave', () => {
    imgsCarrusel.forEach(imgCarrusel => imgCarrusel.classList.remove('hover'));
});

*/