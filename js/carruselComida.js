
//llamamos  el elelmento de html, el que tiene el overflow y el flex
const carruselFood = document.querySelector(".contenedorComida");

//hacemos un intervalo (para hacer el movimiento)
let maxScrollLeft = carruselFood.scrollWidth - carruselFood.clientWidth; //esta resta me da el scrol maax ( de ancho)
let intervalo1 = null;
let step = 1; // esta va a ser la velocidad ( para que se mueva imagen por imagen seria poner un step igual al tamaño del anocho de cada item)

//Creamos Funciones: en play ( star) 
const start = () => {
    //al intervalo le  creamos una funcion sin parametros y sin nombre 
    intervalo1 = setInterval(function () {
        //adentro de este metodo  agregamos el elemento CarruselFood
        carruselFood.scrollLeft = carruselFood.scrollLeft + step; //scroll left  (imagenes van hacia la izq)
        if (carruselFood.scrollLeft >= maxScrollLeft) {
            step *= -1;

        } else if (carruselFood.scrollLeft === 0) {
            step *= -1;   
        }
    }, 10); //esto esta en milisegundos
};




//FReamos funciones : en stop  para agrnader la imagen
const stop = () => {
    clearInterval(intervalo1); //limpiamo el intervalo
};

//creamos un evento para agrandar el elemento selecionado-----------------------------------
carruselFood.addEventListener('mouseover', () => {
    stop();
});

carruselFood.addEventListener('mouseout', () => {
    start();
});
//y ahora ejecutamos el metodo start
start(); 


//---------------------------------
/*const carrusel = document.querySelector(".contenedorComida");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();*/