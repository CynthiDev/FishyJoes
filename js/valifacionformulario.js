const form = document.getElementById('form-all'); //selecionamos los elementos de nuestro formulario
const inputs = document.querySelectorAll('#form-all input, #form-all option'); //esto crea un areglo con los imputs de mi formulario


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {  //creamos un objeto con los valores en false
    nombre: false,
    apellido: false,
    mail: false,
    usuario: false,
    pasword: false
}

const validarFormulario = (e) => {
    switch (e.target.name) { //lo que esta en parentesis es el nombre del input
        case "nombre":  //en caso de que el nombre del imput sea nombre
            validarCampo(expresiones.nombre, e.target, e.target.name); //e.target.name=nombredel campo
            // otra manera de  verificar es:  if(expresiones,usuario.test(e.target.value)){}else{}
            break;
        case "apellido":
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case "mail":
            validarCampo(expresiones.correo, e.target, e.target.name);
            break;
        case "usuario":
            validarCampo(expresiones.usuario, e.target, e.target.name);
            break;
        case "pasword":
            validarCampo(expresiones.password, e.target, e.target.name);
            break;
    }
}

//creamos una funcion para validar campo
const validarCampo = (expresion, input, campo) => {  //epresion=expresion.test, input=(input.value)
    if (expresion.test(input.value)) { //se ejecuta true si conincide con la expresionregular
        document.getElementById(`lab-${campo}`).classList.remove('form-error'); //se usa comilla invertida para usar template strings
        document.getElementById(`lab-${campo}`).classList.add('form-success');

        campos[campo] = true;  //se cambia a true si la exprecion es valida

    } else {
        document.getElementById(`lab-${campo}`).classList.add('form-error');
        document.getElementById(`lab-${campo}`).classList.remove('form-success');
        //document.querySelector('#labNombre').classList.add('form-error') es otra forma de select

        campos[campo] = false;
    }
}

//________________________________________monitoreo al digitar________________________________________________

inputs.forEach((input) => { //por cada input se ejecuta un codigo
    input.addEventListener('keyup', validarFormulario);  //cuando escribo(keyup) me va a ejecutar la f: valudarFormulario
    input.addEventListener('blur', validarFormulario); //enfoque
});


//______________________________________VALIDACION FINAL______________________________________________________

//comprobacion error al  apretar enviar asi desactiva el boton ( listener tipo sbmit)
form.addEventListener('submit', (e) => {  //se ejecuta funcion tipo flecha el submit es del formulario, no de boton
    e.preventDefault();
    if (campos.nombre && campos.apellido && campos.mail && campos.usuario && campos.pasword) {  //validacion final
        form.reset();
        document.querySelector('#exito').classList.replace('exitoHidden', 'exitoVisible');    //muestra mensaje enviado
        setTimeout(() => {
            document.querySelector('#exito').classList.replace('exitoVisible', 'exitoHidden');
        }, 7000);
    } else {
        document.querySelector('#mensajeHidden').classList.replace('msjHidden', 'msjVisible');   //muestra mensaje que tiene que completar
        setTimeout(() => {
            document.getElementById('mensajeHidden').classList.replace('msjVisible', 'msjHidden');
        }, 5000);
    }
}
);