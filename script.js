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
// 1. IMPORTACIONES
// ============================================

import { validateForm } from "./js/func_aux.js";

import { createMessageElement } from "./js/creac_element.js";


// ============================================
// 3. FUNCIONES AUXILIARES 
// ============================================

/**
 * Limpia los campos del formulario
 */
function clearForm() {

    messageForm.reset();
}

/**
 * Guarda un mensaje en el servidor
 * @param {Object} messageData
 * @returns {Promise<Response>}
 */
async function saveMessage(messageData) {

    return await fetch("http://localhost:3000/messages", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(messageData)
    });
}


// ============================================
// 4. CREACIÓN Y MANIPULACIÓN DE MENSAJES
// ============================================

/**
 * Procesa y crea un nuevo mensaje
 */
async function handleNewMessage() {

    const newMessage = {

        userName: userNameInput.value.trim(),

        message: userMessageInput.value.trim()
    };

    try {

        const response = await saveMessage(newMessage);

        if (!response.ok) {

            throw new Error("Error al guardar");
        }

        createMessageElement(
            newMessage.userName,
            newMessage.message
        );

        clearForm();

    } catch (error) {

        console.error(error);

        alert("Error al guardar el mensaje");
    }
}


// ============================================
// 5. EVENTOS
// ============================================

messageForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    await handleNewMessage();
});

// ============================================
// 4. MANEJO DE EVENTOS
// ============================================

/**
 * Maneja el evento de envío del formulario
 * @param {Event} event - Evento del formulario
 */
function handleFormSubmit(event) {
    // TODO: Implementar el manejador del evento submit
    
    // PASO 1: Prevenir el comportamiento por defecto del formulario
    // Pista: event.preventDefault()
    
    // PASO 2: Validar el formulario
    // Si no es válido, detener la ejecución (return)
    
    // PASO 3: Obtener los valores de los campos
    
    // PASO 4: Crear el nuevo elemento de mensaje
    // Llamar a createMessageElement con los valores obtenidos
    
    // PASO 5: Limpiar el formulario
    // Pista: messageForm.reset()
    
    // PASO 6: Limpiar los errores
    
    // PASO 7: Opcional - Enfocar el primer campo para facilitar agregar otro mensaje
    // Pista: userNameInput.focus()
}

/**
 * Limpia los errores cuando el usuario empieza a escribir
 */
function handleInputChange() {
    // TODO: Implementar limpieza de errores al escribir
    // Esta función se ejecuta cuando el usuario escribe en un campo
    // Debe limpiar el error de ese campo específico
}


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
