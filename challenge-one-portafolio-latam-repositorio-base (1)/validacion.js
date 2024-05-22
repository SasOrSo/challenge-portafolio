const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const errorNombre = document.getElementById('error-nombre-requerido');
const errorNombreLongitud = document.getElementById('error-nombre-longitud');
const errorEmailRequerido = document.getElementById('error-email-requerido');
const errorEmailValido = document.getElementById('error-email-valido');
const errorAsuntoRequerido = document.getElementById('error-asunto-requerido');
const errorAsuntoLongitud = document.getElementById('error-asunto-longitud');
const errorMensajeRequerido = document.getElementById('error-mensaje-requerido');
const errorMensajeLongitud = document.getElementById('error-mensaje-longitud');

form.addEventListener('submit', (e) => {
    let mensajesError = [];

    // Validación del nombre (campo vacío)
    if (nombre.value === '' || nombre.value == null) {
        mensajesError.push('Nombre es un campo requerido');
        errorNombre.innerText = 'Nombre es un campo requerido'; 
    } else {
        errorNombre.innerText = ''; // Limpia el mensaje de error si no hay error
    }

    // Validación de longitud del nombre
    if (nombre.value.length > 50) {
            mensajesError.push('Nombre no puede contener más de 50 caracteres');
            errorNombreLongitud.innerText = 'Nombre no puede contener más de 50 caracteres'; // Cambio aquí
    } else {
            errorNombreLongitud.innerText = ''; // Limpia el mensaje de error si no hay error
    }

          // Validación de Email
    if (email.value === '' || email.value == null) {
            mensajesError.push('Email es un campo requerido');
            errorEmailRequerido.innerText = 'Email es un campo requerido';
    } else {
            errorEmailRequerido.innerText = ''; // Limpia el mensaje de error si no hay error
    }

    if (!emailValido.test(email.value)) {
        mensajesError.push('Por favor, ingrese un correo electrónico válido');
        errorEmailValido.innerText = 'Por favor, ingrese un correo electrónico válido';
    } else {
        errorEmailValido.innerText = ''; // Limpia el mensaje de error si no hay error
    }

    // Validación de Asunto

    if (asunto.value === '' || asunto.value == null) {
        mensajesError.push('Por favor, ingrese el asunto');
        errorAsuntoRequerido.innerText = 'Por favor, ingrese el asunto';
    } else {
        errorAsuntoRequerido.innerText = ''; // Limpia el mensaje de error si no hay error
    }

    if (asunto.value.length > 50) {
        mensajesError.push('El asunto no puede contener más de 50 caracteres');
        errorAsuntoLongitud.innerText = 'El asunto no puede contener más de 50 caracteres';
    } else {
        errorAsuntoLongitud.innerText = ''; // Limpia el mensaje de error si no hay error
    }

    // Validación de Mensaje

    if (mensaje.value === '' || mensaje.value == null) {
        mensajesError.push('Por favor, ingrese su mensaje')
        errorMensajeRequerido.innerText = 'Por favor, ingrese su mensaje';
    } else {
        errorMensajeRequerido.innerText = ''; // Limpia el mensaje de error si no hay error
    }

    if (mensaje.value.length > 300) {
        mensajesError.push('El mensaje no puede contener más de 300 caracteres');
        errorMensajeLongitud.innerText = 'El mensaje no puede contener más de 300 caracteres';
    } else {
        errorMensajeLongitud.innerText = ''; // Limpia el mensaje de error si no hay error
    }
        
    if (mensajesError.length > 0) {
        e.preventDefault();
    }
});
