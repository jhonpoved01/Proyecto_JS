/**
 * ============================================
 * EJERCICIO DE MANIPULACIÓN DEL DOM
 * ============================================
 * 
 * Objetivo: Aplicar conceptos del DOM para seleccionar elementos,
 * responder a eventos y crear nuevos elementos dinámicamente.
 * 
 * Autor: [Tu nombre aquí]
 * Fecha: [Fecha actual]
 * ============================================
 */

// ============================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================

/**
 * Seleccionamos los elementos del DOM que necesitamos manipular.
 * Usamos getElementById para obtener referencias a los elementos únicos.
 */

// Formulario
const messageForm = document.getElementById('messageForm');

// Campos de entrada
const userNameInput = document.getElementById('userName');
const userMessageInput = document.getElementById('userMessage');

// Botón de envío
const submitBtn = document.getElementById('submitBtn');

// Elementos para mostrar errores
const userNameError = document.getElementById('userNameError');
const userMessageError = document.getElementById('userMessageError');

// Contenedor donde se mostrarán los mensajes
const messagesContainer = document.getElementById('messagesContainer');

// Estado vacío (mensaje que se muestra cuando no hay mensajes)
const emptyState = document.getElementById('emptyState');

// Contador de mensajes
const messageCount = document.getElementById('messageCount');

// Variable para llevar el conteo de mensajes
let totalMessages = 0;


// ============================================
// 2. FUNCIONES AUXILIARES
// ============================================

/**
 * Valida que un campo no esté vacío ni contenga solo espacios en blanco
 * @param {string} value - El valor a validar
 * @returns {boolean} - true si es válido, false si no lo es
 */
function isValidInput(value) {
    // TODO: Implementar validación
    // Pista: usa trim() para eliminar espacios al inicio y final
    // Retorna true si después de trim() el string tiene longitud > 0
}

/**
 * Muestra un mensaje de error en un elemento específico
 * @param {HTMLElement} errorElement - Elemento donde mostrar el error
 * @param {string} message - Mensaje de error a mostrar
 */
function showError(errorElement, message) {
    // TODO: Implementar función para mostrar error
    // Pista: asigna el mensaje al textContent del elemento
}

/**
 * Limpia el mensaje de error de un elemento específico
 * @param {HTMLElement} errorElement - Elemento del que limpiar el error
 */
function clearError(errorElement) {
    // TODO: Implementar función para limpiar error
    // Pista: asigna un string vacío al textContent
}

/**
 * Valida todos los campos del formulario
 * @returns {boolean} - true si todos los campos son válidos, false si alguno no lo es
 */
function validateForm() {
    // TODO: Implementar validación completa del formulario
    // 1. Obtener los valores de los inputs usando .value
    // 2. Crear una variable para saber si el formulario es válido (inicialmente true)
    // 3. Validar el campo de nombre de usuario
    //    - Si no es válido, mostrar error y cambiar la variable a false
    //    - Si es válido, limpiar el error
    // 4. Validar el campo de mensaje
    //    - Si no es válido, mostrar error y cambiar la variable a false
    //    - Si es válido, limpiar el error
    // 5. Retornar si el formulario es válido o no
    
    // Ejemplo de estructura:
    /*
    const userName = userNameInput.value;
    const userMessage = userMessageInput.value;
    let isValid = true;
    
    // Validar nombre
    if (!isValidInput(userName)) {
        // Mostrar error
        // Agregar clase 'error' al input
        isValid = false;
    } else {
        // Limpiar error
        // Remover clase 'error' del input
    }
    
    // Validar mensaje (estructura similar)
    
    return isValid;
    */
}

/**
 * Obtiene la fecha y hora actual formateada
 * @returns {string} - Fecha y hora en formato legible
 */
function getCurrentTimestamp() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('es-ES', options);
}

/**
 * Obtiene las iniciales de un nombre
 * @param {string} name - Nombre completo
 * @returns {string} - Iniciales en mayúsculas
 */
function getInitials(name) {
    // TODO: Implementar función para obtener iniciales
    // Pista: 
    // 1. Separar el nombre por espacios usando split(' ')
    // 2. Tomar la primera letra de cada palabra
    // 3. Unirlas y convertirlas a mayúsculas
    // 4. Si solo hay una palabra, retornar las dos primeras letras
}

/**
 * Actualiza el contador de mensajes
 */
function updateMessageCount() {
    // TODO: Implementar actualización del contador
    // Pista: Usa template literals para crear el texto
    // Formato: "X mensaje(s)" o "X mensajes"
}

/**
 * Oculta el estado vacío (mensaje cuando no hay mensajes)
 */
function hideEmptyState() {
    // TODO: Implementar función para ocultar el estado vacío
    // Pista: Agrega la clase 'hidden' al elemento emptyState
}

/**
 * Muestra el estado vacío (mensaje cuando no hay mensajes)
 */
function showEmptyState() {
    // TODO: Implementar función para mostrar el estado vacío
    // Pista: Remueve la clase 'hidden' del elemento emptyState
}


// ============================================
// 3. CREACIÓN DE ELEMENTOS
// ============================================

/**
 * Crea un nuevo elemento de mensaje en el DOM
 * @param {string} userName - Nombre del usuario
 * @param {string} message - Contenido del mensaje
 */
function createMessageElement(userName, message) {
    // TODO: Implementar la creación de un nuevo mensaje
    
    // PASO 1: Crear el contenedor principal del mensaje
    // Pista: document.createElement('div')
    // Asignar la clase 'message-card'
    
    // PASO 2: Crear la estructura HTML del mensaje
    // Puedes usar innerHTML con la siguiente estructura:
    /*
    <div class="message-card__header">
        <div class="message-card__user">
            <div class="message-card__avatar">[INICIALES]</div>
            <span class="message-card__username">[NOMBRE]</span>
        </div>
        <span class="message-card__timestamp">[FECHA]</span>
    </div>
    <div class="message-card__content">[MENSAJE]</div>
    */
    
    // PASO 3: Insertar el nuevo elemento en el contenedor de mensajes
    // Pista: messagesContainer.appendChild(nuevoElemento)
    // O usar insertBefore para agregarlo al principio
    
    // PASO 4: Incrementar el contador de mensajes
    
    // PASO 5: Actualizar el contador visual
    
    // PASO 6: Ocultar el estado vacío si está visible
}


// ============================================
// 4. MANEJO DE EVENTOS
// ============================================
// script.js

// Importamos la función desde el archivo secundario
import { handleFormSubmit } from './man_even.js';

// Variables para almacenar los datos y los elementos
let usuariosAutorizados = [];

// Capturamos el formulario, los inputs y el contenedor de abajo
const formulario = document.getElementById('tu-formulario-id'); // Cambia por el ID real de tu formulario o div contenedor
const inputCedula = document.getElementById('id-del-input-cedula');
const inputMensaje = document.getElementById('id-del-input-mensaje');
const contenedorMensajesPublicados = document.getElementById('mensajes-publicados'); // La sección de más abajo

// Agrupamos los inputs en un objeto para pasarlos más fácil
const elementosFormulario = {
    formulario: formulario,
    inputCedula: inputCedula,
    inputMensaje: inputMensaje
};

// Función para cargar los usuarios de db.json
async function iniciarBaseDeDatos() {
    try {
        const respuesta = await fetch('./db.json');
        const datos = await respuesta.json();
        
        // Guardamos el array de usuarios del JSON (ajusta 'usuarios' según tu archivo JSON)
        usuariosAutorizados = datos.usuarios; 
        
        // Escuchamos el evento de enviar/click del formulario
        formulario.addEventListener('submit', (event) => {
            
            // Llamamos a la función importada pasándole todo lo que necesita
            handleFormSubmit(event, elementosFormulario, usuariosAutorizados, (nombreUsuario, textoMensaje) => {
                
                // Esta es la función (callback) que se ejecuta si la validación fue exitosa:
                // Crea la estructura del mensaje y la agrega a la sección de abajo
                const nuevaTarjetaMensaje = `
                    <div class="mensaje-tarjeta">
                        <strong>${nombreUsuario}:</strong>
                        <p>${textoMensaje}</p>
                        <small>Publicado justo ahora</small>
                    </div>
                `;
                
                // Lo sumamos a la sección de mensajes publicados abajo
                contenedorMensajesPublicados.innerHTML += nuevaTarjetaMensaje;
            });
        });

    } catch (error) {
        console.error("Error al cargar la base de datos:", error);
    }
}

// Ejecutamos la carga inicial
iniciarBaseDeDatos();

// ============================================
// 5. REGISTRO DE EVENTOS
// ============================================

/**
 * Aquí registramos todos los event listeners
 */

// TODO: Registrar el evento 'submit' en el formulario
// Pista: messageForm.addEventListener('submit', handleFormSubmit);

// TODO: Registrar eventos 'input' en los campos para limpiar errores al escribir
// Pista: userNameInput.addEventListener('input', handleInputChange);
// Pista: userMessageInput.addEventListener('input', handleInputChange);


// ============================================
// 6. REFLEXIÓN Y DOCUMENTACIÓN
// ============================================

/**
 * PREGUNTAS DE REFLEXIÓN:
 * 
 * 1. ¿Qué elemento del DOM estás seleccionando?
 *    R: 
 * 
 * 2. ¿Qué evento provoca el cambio en la página?
 *    R: 
 * 
 * 3. ¿Qué nuevo elemento se crea?
 *    R: 
 * 
 * 4. ¿Dónde se inserta ese elemento dentro del DOM?
 *    R: 
 * 
 * 5. ¿Qué ocurre en la página cada vez que repites la acción?
 *    R: 
 */


// ============================================
// 7. INICIALIZACIÓN (OPCIONAL)
// ============================================

/**
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM completamente cargado');
    console.log('📝 Aplicación de registro de mensajes iniciada');
    
    // Aquí puedes agregar cualquier inicialización adicional
    // Por ejemplo, cargar mensajes guardados del localStorage
});


// ============================================
// 8. FUNCIONALIDADES ADICIONALES (BONUS)
// ============================================

/**
 * RETOS ADICIONALES OPCIONALES:
 * 
 * 1. Agregar un botón para eliminar mensajes individuales
 * 2. Implementar localStorage para persistir los mensajes
 * 3. Agregar un contador de caracteres en el textarea
 * 4. Implementar un botón para limpiar todos los mensajes
 * 5. Agregar diferentes colores de avatar según el nombre del usuario
 * 6. Permitir editar mensajes existentes
 * 7. Agregar emojis o reacciones a los mensajes
 * 8. Implementar búsqueda/filtrado de mensajes
 */
