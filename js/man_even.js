// man_even.js

/**
 * Valida los datos del formulario contra el db.json y procesa el envío del mensaje
 * @param {Event} event - Evento del formulario
 * @param {Object} elementos - Objeto con los inputs y elementos del DOM
 * @param {Array} usuariosDB - Lista de usuarios registrados que viene del db.json
 * @param {Function} callbackAgregarMensaje - Función para pintar el mensaje abajo
 */
export function handleFormSubmit(event, elementos, usuariosDB, callbackAgregarMensaje) {
    // PASO 1: Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // PASO 3: Obtener los valores de los campos
    const cedulaValor = elementos.inputCedula.value.trim();
    const mensajeValor = elementos.inputMensaje.value.trim();

    // PASO 2: Validar el formulario (Que no estén vacíos)
    if (cedulaValor === "" || mensajeValor === "") {
        alert("Por favor, rellene todos los campos (Cédula y Mensaje).");
        return; // Detiene la ejecución
    }

    // VALIDACIÓN EXTRA: Comprobar si la cédula existe en los datos del db.json
    // Asumiendo que tu JSON tiene objetos con la propiedad 'cedula'
    const usuarioExiste = usuariosDB.find(user => user.id == cedulaValor);
  
    if (!usuarioExiste) {
        alert("La cédula ingresada no está registrada en el sistema.");
        return; // Detiene la ejecución si no existe
    }

    // PASO 4: Crear y enviar el nuevo elemento de mensaje si todo es correcto
    // Le pasamos los datos necesarios a la sección de abajo a través del callback
    callbackAgregarMensaje(usuarioExiste.name || "Usuario", mensajeValor);

    // PASO 5: Limpiar el formulario
    elementos.formulario.reset();

    // PASO 7: Enfocar el primer campo para facilitar agregar otro mensaje
    elementos.inputCedula.focus();
}