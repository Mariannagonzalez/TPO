// ----------------------------------------------------------------------------
// Tomamos el id: formulario del HTML
// ----------------------------------------------------------------------------

const formulario = document.getElementById("formulario");

// ----------------------------------------------------------------------------
// Validamos cada elemento del form.
// ----------------------------------------------------------------------------

const validarNombre = function (evento) {

    if (formulario.Nombre.value === '') {
        alert("Por favor, introduzca su nombre y apellido.");
        evento.preventDefault();
    }
}

const validarTelefono = function (evento) {

    if (formulario.Telefono.value === '') {
        alert("Por favor, introduzca un teléfono de contacto");
        evento.preventDefault();
    }
}

const validarEmail = function (evento) {

    if (formulario.Email.value === '' || !(formulario.Email.value.includes('@'))) {
        alert("Por favor, introduzca un email válido");
        evento.preventDefault();
    }
}

const validarFecha = function (evento) {

    let desde = formulario.Desde.value;
    let hasta = formulario.Hasta.value;

    if (desde === '' && hasta === '') {
        alert("Por favor, complete la fecha de su reserva");
        evento.preventDefault();
        return;
    }

    // Ya sabemos que hay fechas agregadas.
    // Obtengo el año, mes y dia de cada fecha.
    desde = formulario.Desde.value.split('-');
    hasta = formulario.Hasta.value.split('-');

    // Verifico que el año desde no sea incorrecto.
    if (desde[0] > hasta[0]) {
        alert("El año indicado es incorrecto.");
        evento.preventDefault();
        return;
    }

    // El año es correcto. Verificamos el mes.
    if ((desde[0] <= hasta[0]) && (desde[1] > hasta[1])) {
        alert("El mes indicado es incorrecto.");
        evento.preventDefault();
        return;
    }

    // El mes es correcto. Verificamos el dia.
    if (
        (desde[0] <= hasta[0]) &&
        (desde[1] <= hasta[1]) &&
        (desde[2] > hasta[2])
    ) {
        alert("El dia indicado es incorrecto.");
        evento.preventDefault();
        return;
    }
}

const validarCantidad = function (evento) {

    if (formulario.Cantidad.value === '') {
        alert("Complete Cantidad de personas");
        evento.preventDefault();
    }
}

const validarReserva = function (evento) {

    const checkboxes = formulario.Reserva.elements;

    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        if (checkbox.checked === true) {
            return;
        }
    }

    alert("Elija al menos una opción gastronómica");
    evento.preventDefault();
}

const validarOpcion = function (evento) {

    const checkboxes = formulario.Opcion.elements;

    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        if (checkbox.checked === true) {
            return;
        }
    }

    alert("Elija al menos una opción de Spa");
    evento.preventDefault();

}


// ----------------------------------------------------------------------------
// Validar todo el form.
// ----------------------------------------------------------------------------

const validar = function (evento) {
    console.log('Validando!', evento);

    validarNombre(evento);
    validarTelefono(evento);
    validarEmail(evento);
    validarFecha(evento);
    validarCantidad(evento);
    validarReserva(evento);
    validarOpcion(evento);
}

// ----------------------------------------------------------------------------
// Escuchamos el evento Submit, y ejecutamos "validar" cuando pase.
// ----------------------------------------------------------------------------

formulario.addEventListener("submit", validar);
