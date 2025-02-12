// INICIO de Validar el No. documento
function validarLenDoc() {
    var input = document.getElementById("no_documento");
    var mensajeErrorDoc = document.getElementById("mensajeErrorDoc");
    var valor = input.value;

    // Limitar la longitud a 10 digitos
    if (valor.length > 10) {
        input.value = valor.slice(0, 10);
        mensajeErrorDoc.textContent = "Solo se permiten 10 digitos.";
        setTimeout(function() {
            mensajeErrorDoc.textContent = "";
        }, 2000);
    }
     // Validar que solo se permitan números
     if (!/^\d+$/.test(valor)) {
        mensajeErrorDoc.textContent = "Solo se permiten números.";
        input.value = valor.replace(/\D/g, '');  // Eliminar caracteres no numéricos
        setTimeout(function() {
            mensajeErrorDoc.textContent = "";
        }, 2000);
    }
}
// FIN de Validar el No. documento

// INICIO de Validar Primer y segundo nombre
function validarNombre(idInput) {
    var input = document.getElementById(idInput);
    var valor = input.value;
    // Determinar el ID del mensaje de error basado en el ID del input
    if (idInput === "fName") {
        mensajeErrorName = document.getElementById("mensajeErrorFName");
        // Validar longitud no mayor a 30 caracteres
        if (valor.length > 30) {
            input.value = valor.slice(0, 30);  // Cortar el valor a 30 caracteres
            mensajeErrorName.textContent = "Solo se permiten 30 caracteres.";
            setTimeout(function() {
            mensajeErrorName.textContent = "";
            }, 2000);
        }
        // Validar que solo se acepte texto sin números
        if (!/^:[a-zA-ZáéíóúñÁÉÍÓÚÑ]+$/.test(valor)) {
            input.value = valor.replace(/[\d\s]/g,'');  // Eliminar números del valor
            mensajeErrorName.textContent = "No se aceptan numeros, ni espacios";
            setTimeout(function() {
            mensajeErrorName.textContent = "";
            }, 2000);
        }
    
        
    } else if (idInput === "sName") {
        mensajeErrorName = document.getElementById("mensajeErrorSName");
        // Validar longitud no mayor a 30 caracteres
        if (valor.length > 30) {
            input.value = valor.slice(0, 30);  // Cortar el valor a 30 caracteres
            mensajeErrorName.textContent = "Solo se permiten 30 caracteres.";
            setTimeout(function() {
            mensajeErrorName.textContent = "";
            }, 2000);
        }
        // Validar que solo se acepte texto sin números
        if (!/^[a-zA-ZáéíóúñÁÉÍÓÚÑ]+(?:[ ]?[a-zA-ZáéíóúñÁÉÍÓÚÑ]*)*?$/.test(valor)) {
            input.value = valor.trim().replace(/[^A-Za-z\s]/g, '');  // Eliminar números del valor
            mensajeErrorName.textContent = "Empezar por letra, no numeros";
            setTimeout(function() {
            mensajeErrorName.textContent = "";
            }, 2000);
        }
    }
    
}

// FIN de Validar Primer y segundo nombre

// INICIO de Validar el Apellido
function validarApellido() {
    var input = document.getElementById("lName");
    var mensajeErrorLName = document.getElementById("mensajeErrorLName");
    var valor = input.value;

    // Limitar la longitud a 5 caracteres
    if (valor.length > 30) {
        input.value = valor.slice(0, 30); // Cortar el valor a 30 caracteres
        mensajeErrorLName.textContent = "Solo se permiten 30 caracteres.";
        setTimeout(function() {
            mensajeErrorLName.textContent = "";
        }, 2000);
    }
     // Validar que solo se permitan números
     if (!/^[a-zA-ZáéíóúñÁÉÍÓÚÑ]+(?:[ ]?[a-zA-ZáéíóúñÁÉÍÓÚÑ]*)*?$/.test(valor)) {
        input.value = valor.trim().replace(/[^A-Za-z\s]/g, '');  // Eliminar números del valor
        mensajeErrorLName.textContent = "Empezar por letra, no se permiten numeros";
        setTimeout(function() {
            mensajeErrorLName.textContent = "";
        }, 2000);
    }
}
// FIN de Validar Apellido


function validarLenCel() {
    var input = document.getElementById("phone");
    var mensajeErrorCel = document.getElementById("mensajeErrorCel");
    var valor = input.value;

    // Limitar la longitud a 10 caracteres
    if (valor.length > 10) {
        input.value = valor.slice(0, 10);
        mensajeErrorCel.textContent = "Solo se permiten 10 digitos.";
        setTimeout(function() {
            mensajeErrorCel.textContent = "";
        }, 2000);
    }
    // Validar que solo se permitan números
    if (!/^\d+$/.test(valor)) {
        mensajeErrorCel.textContent = "Solo se permiten números.";
        input.value = valor.replace(/\D/g, '');  // Eliminar caracteres no numéricos
        setTimeout(function() {
            mensajeErrorCel.textContent = "";
        }, 2000);
    }
}