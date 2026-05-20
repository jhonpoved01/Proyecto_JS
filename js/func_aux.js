
// ============================================
// VALIDACIONES
// ============================================

/**
 * Verifica que un campo no esté vacío.
 *
 * trim() elimina espacios al inicio
 * y final del texto.
 *
 * @param {string} valor
 * @returns {boolean}
 */
export function validarCampoVacio(valor) {

    return valor.trim().length > 0;

}

// ============================================
// MANEJO DE ERRORES
// ============================================

/**
 * Muestra un mensaje de error
 * debajo de un campo.
 *
 * @param {HTMLElement} elementoError
 * @param {string} mensaje
 */
export function mostrarError(elementoError, mensaje) {

    elementoError.textContent = mensaje;

}

/**
 * Limpia el mensaje de error.
 *
 * @param {HTMLElement} elementoError
 */
export function limpiarError(elementoError) {

    elementoError.textContent = '';

}

// ============================================
// MENSAJES DEL SISTEMA
// ============================================

/**
 * Muestra mensajes dinámicos
 * en la interfaz.
 *
 * Ejemplos:
 * - éxito
 * - error
 * - información
 *
 * @param {string} mensaje
 * @param {string} tipo
 */
export function mostrarMensajeSistema(
    mensaje,
    tipo = 'info'
) {

    /*
        Contenedor donde aparecerán
        los mensajes.
    */
    const contenedorMensaje =
        document.getElementById('mensajeSistema');

    /*
        Insertamos texto.
    */
    contenedorMensaje.textContent =
        mensaje;

    /*
        Reiniciamos clases CSS.
    */
    contenedorMensaje.className = '';

    /*
        Agregamos clase dependiendo
        del tipo de mensaje.
    */
    contenedorMensaje.classList.add(tipo);

    /*
        Eliminamos el mensaje después
        de 3 segundos.
    */
    setTimeout(() => {

        contenedorMensaje.textContent = '';

        contenedorMensaje.className = '';

    }, 3000);

}

// ============================================
// FUNCIONES PARA EL DOM
// ============================================

/**
 * Crea elementos HTML dinámicamente.
 *
 * Esta función ayuda a reutilizar
 * código al manipular el DOM.
 *
 * @param {string} tipoElemento
 * @param {string} texto
 * @returns {HTMLElement}
 */
export function crearElemento(
    tipoElemento,
    texto = ''
) {

    const elemento =
        document.createElement(tipoElemento);

    elemento.textContent = texto;

    return elemento;

}

// ============================================
// FUNCIONES DE FORMULARIOS
// ============================================

/**
 * Limpia un formulario completo.
 *
 * @param {HTMLFormElement} formulario
 */
export function limpiarFormulario(formulario) {

    formulario.reset();

}

/**
 * Reinicia el contador
 * de caracteres.
 */
export function reiniciarContadorCaracteres() {

    document.getElementById(
        'contadorCaracteres'
    ).textContent = '0';

}

// ============================================
// FUNCIONES DE FECHA
// ============================================

/**
 * Convierte una fecha al formato
 * español legible.
 *
 * @param {string} fecha
 * @returns {string}
 */
export function formatearFecha(fecha) {

    return new Date(fecha)
        .toLocaleDateString(
            'es-ES',
            {

                year: 'numeric',

                month: 'long',

                day: 'numeric'

            }
        );

}

// ============================================
// FUNCIONES VISUALES
// ============================================

/**
 * Retorna una clase CSS dependiendo
 * del estado de la tarea.
 *
 * Esto permitirá aplicar colores
 * diferentes en CSS.
 *
 * @param {string} estado
 * @returns {string}
 */
export function obtenerClaseEstado(estado) {

    /*
        Convertimos el texto a minúsculas
        para evitar errores.
    */
    const estadoMinuscula =
        estado.toLowerCase();

    /*
        Dependiendo del estado,
        retornamos una clase CSS.
    */
    switch (estadoMinuscula) {

        case 'pendiente':

            return 'estado-pendiente';

        case 'en progreso':

            return 'estado-progreso';

        case 'completada':

            return 'estado-completada';

        default:

            return '';

    }

}

// ============================================
// FUNCIONES ADICIONALES (BONUS)
// ============================================

/**
 * Genera las iniciales
 * de un nombre.
 *
 * Ejemplo:
 * Juan Pérez -> JP
 *
 * @param {string} nombreCompleto
 * @returns {string}
 */
export function obtenerIniciales(nombreCompleto) {

    /*
        Dividimos el nombre
        en palabras.
    */
    const palabras =
        nombreCompleto.trim().split(' ');

    /*
        Si solo existe un nombre,
        tomamos las primeras 2 letras.
    */
    if (palabras.length === 1) {

        return palabras[0]
            .substring(0, 2)
            .toUpperCase();

    }

    /*
        Tomamos la primera letra
        de cada palabra.
    */
    return palabras
        .map(palabra => palabra[0])
        .join('')
        .toUpperCase();

}

/**
 * Guarda datos en localStorage.
 *
 * @param {string} clave
 * @param {Array|Object} datos
 */
export function guardarEnLocalStorage(
    clave,
    datos
) {

    localStorage.setItem(
        clave,
        JSON.stringify(datos)
    );

}

/**
 * Obtiene datos desde localStorage.
 *
 * @param {string} clave
 * @returns {Array|Object|null}
 */
export function obtenerDeLocalStorage(clave) {

    const datos =
        localStorage.getItem(clave);

    /*
        Si no existen datos,
        retornamos null.
    */
    if (!datos) {

        return null;

    }

    /*
        Convertimos nuevamente
        a objeto JavaScript.
    */
    return JSON.parse(datos);

}