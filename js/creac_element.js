// Esta funcion es para crear elementos del DOM

import {
    getCurrentTimestamp,
    getInitials,
    updateMessageCount,
    hideEmptyState,
    incrementMessages
} from "./func_aux.js";

const messagesContainer = document.getElementById("messagesContainer");

export function createMessageElement(userName, message) {

    // Crear contenedor principal
    const messageCard = document.createElement("div");

    messageCard.classList.add("message-card");

    // Crear estructura HTML
    messageCard.innerHTML = `
    
    <div class="message-card__header">

        <div class="message-card__user">

            <div class="message-card__avatar">
                ${getInitials(userName)}
            </div>

            <span class="message-card__username">
                ${userName}
            </span>

        </div>

        <span class="message-card__timestamp">
            ${getCurrentTimestamp()}
        </span>

    </div>

    <div class="message-card__content">
        ${message}
    </div>
    
    `;

    // Insertar mensaje
    messagesContainer.prepend(messageCard);

    // Actualizar contador
    incrementMessages();

    updateMessageCount();

    // Ocultar estado vacío
    hideEmptyState();
}