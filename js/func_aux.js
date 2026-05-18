//Este codigo es para las funciones auxiliares

const userNameInput = document.getElementById("userName");
const userMessageInput = document.getElementById("userMessage");

const userNameError = document.getElementById("userNameError");
const userMessageError = document.getElementById("userMessageError");

const messageCount = document.getElementById("messageCount");
const emptyState = document.getElementById("emptyState");

let totalMessages = 0;

export function isValidInput(value) {
    return value.trim().length > 0;
}

export function showError(errorElement, message) {
    errorElement.textContent = message;
}

export function clearError(errorElement) {
    errorElement.textContent = "";
}

export function validateForm() {

    const userName = userNameInput.value;
    const userMessage = userMessageInput.value;

    let isValid = true;

    // Validar nombre
    if (!isValidInput(userName)) {

        showError(userNameError, "El nombre es obligatorio");
        userNameInput.classList.add("error");

        isValid = false;

    } else {

        clearError(userNameError);
        userNameInput.classList.remove("error");
    }

    // Validar mensaje
    if (!isValidInput(userMessage)) {

        showError(userMessageError, "El mensaje es obligatorio");
        userMessageInput.classList.add("error");

        isValid = false;

    } else {

        clearError(userMessageError);
        userMessageInput.classList.remove("error");
    }

    return isValid;
}

export function getCurrentTimestamp() {

    const now = new Date();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };

    return now.toLocaleDateString("es-ES", options);
}

export function getInitials(name) {

    const names = name.trim().split(" ");

    if (names.length === 1) {
        return names[0].slice(0, 2).toUpperCase();
    }

    return names
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

export function updateMessageCount() {

    messageCount.textContent =
        `${totalMessages} ${totalMessages === 1 ? "mensaje" : "mensajes"}`;
}

export function hideEmptyState() {
    emptyState.classList.add("hidden");
}

export function showEmptyState() {
    emptyState.classList.remove("hidden");
}

export function incrementMessages() {
    totalMessages++;
}