// ============================================
// IMPORTACIÓN DE FUNCIONES
// ============================================

import {

    buscarUsuario,
    mostrarDatosUsuario,
    registrarTarea,
    limpiarTodasLasTareas,
    filtrarTareas

} from './js/task_manager.js';

import {

    validarCampo,
    mostrarError,
    limpiarError,
    mostrarMensajeSistema,
    limpiarFormulario,
    reiniciarContadorCaracteres

} from './js/func_aux.js';

// ============================================
// INICIALIZACIÓN DEL DOM
// ============================================

/**
 * Esta función se ejecuta
 * cuando el DOM está completamente cargado.
 */
document.addEventListener(
    'DOMContentLoaded',
    function () {

        console.log(
            '✅ DOM completamente cargado'
        );

        console.log(
            '📝 Aplicación de registro de tareas iniciada'
        );

        /*
            Ocultamos secciones inicialmente.
        */
        document.getElementById(
            'seccionDatosUsuario'
        ).classList.add('hidden');

        document.getElementById(
            'seccionFormularioTareas'
        ).classList.add('hidden');

        document.getElementById(
            'tablaTareas'
        ).classList.add('hidden');

        document.getElementById(
            'seccionFiltroTareas'
        ).classList.add('hidden');

        /*
            Configuramos eventos.
        */
        configurarEventos();

    }
);

// ============================================
// CONFIGURACIÓN DE EVENTOS
// ============================================

/**
 * Configura todos los eventos
 * principales de la aplicación.
 */
function configurarEventos() {

    // ============================================
    // FORMULARIO BUSCAR USUARIO
    // ============================================

    document.getElementById(
        'formularioBusquedaUsuario'
    ).addEventListener(
        'submit',
        manejarBusquedaUsuario
    );

    // ============================================
    // FORMULARIO REGISTRAR TAREA
    // ============================================

    document.getElementById(
        'formularioTareas'
    ).addEventListener(
        'submit',
        manejarRegistroTarea
    );

    // ============================================
    // BOTÓN LIMPIAR TAREAS
    // ============================================

    document.getElementById(
        'botonLimpiarTareas'
    ).addEventListener(
        'click',
        async function () {

            /*
                Confirmación antes
                de eliminar.
            */
            const confirmar =
                confirm(
                    '¿Deseas eliminar todas las tareas?'
                );

            if (!confirmar) {

                return;

            }

            await limpiarTodasLasTareas();

        }
    );

    // ============================================
    // CONTADOR DE CARACTERES
    // ============================================

    const textareaDescripcion =
        document.getElementById(
            'descripcionTarea'
        );

    textareaDescripcion.addEventListener(
        'input',
        function () {

            /*
                Obtenemos longitud actual.
            */
            const cantidadCaracteres =
                textareaDescripcion.value.length;

            /*
                Actualizamos contador.
            */
            document.getElementById(
                'contadorCaracteres'
            ).textContent =
                cantidadCaracteres;

        }
    );

    // ============================================
    // FILTRO DE TAREAS
    // ============================================

    document.getElementById(
        'filtroEstado'
    ).addEventListener(
        'change',
        function (evento) {

            /*
                Estado seleccionado.
            */
            const estadoSeleccionado =
                evento.target.value;

            /*
                Filtramos tareas.
            */
            filtrarTareas(
                estadoSeleccionado
            );

        }
    );

}

// ============================================
// MANEJAR BÚSQUEDA DE USUARIO
// ============================================

/**
 * Busca un usuario utilizando
 * el documento ingresado.
 *
 * @param {Event} evento
 */
async function manejarBusquedaUsuario(evento) {

    /*
        Evitamos recarga.
    */
    evento.preventDefault();

    /*
        Campo documento.
    */
    const inputDocumento =
        document.getElementById(
            'documentoUsuario'
        );

    /*
        Valor ingresado.
    */
    const documentoUsuario =
        inputDocumento.value.trim();

    /*
        Elemento error.
    */
    const elementoError =
        document.getElementById(
            'errorDocumentoUsuario'
        );

    // ============================================
    // VALIDACIÓN
    // ============================================

    if (!validarCampo(documentoUsuario)) {

        mostrarError(
            elementoError,
            'Debes ingresar un documento.'
        );

        return;

    }

    /*
        Limpiamos error.
    */
    limpiarError(
        elementoError
    );

    // ============================================
    // BUSCAR USUARIO
    // ============================================

    const usuario =
        await buscarUsuario(
            documentoUsuario
        );

    /*
        Si usuario no existe.
    */
    if (!usuario) {

        mostrarError(
            elementoError,
            'Usuario no encontrado.'
        );

        /*
            Ocultamos secciones.
        */
        document.getElementById(
            'seccionDatosUsuario'
        ).classList.add('hidden');

        document.getElementById(
            'seccionFormularioTareas'
        ).classList.add('hidden');

        document.getElementById(
            'seccionFiltroTareas'
        ).classList.add('hidden');

        document.getElementById(
            'tablaTareas'
        ).classList.add('hidden');

        return;

    }

    // ============================================
    // MOSTRAR USUARIO
    // ============================================

    mostrarDatosUsuario(usuario);

    mostrarMensajeSistema(
        'Usuario encontrado correctamente.',
        'success'
    );

}

// ============================================
// MANEJAR REGISTRO DE TAREA
// ============================================

/**
 * Registra una nueva tarea.
 *
 * @param {Event} evento
 */
async function manejarRegistroTarea(evento) {

    /*
        Evitamos recarga.
    */
    evento.preventDefault();

    // ============================================
    // OBTENER CAMPOS
    // ============================================

    const tituloTarea =
        document.getElementById(
            'tituloTarea'
        ).value.trim();

    const descripcionTarea =
        document.getElementById(
            'descripcionTarea'
        ).value.trim();

    const estadoTarea =
        document.getElementById(
            'estadoTarea'
        ).value;

    // ============================================
    // ELEMENTOS ERROR
    // ============================================

    const errorTitulo =
        document.getElementById(
            'errorTituloTarea'
        );

    const errorDescripcion =
        document.getElementById(
            'errorDescripcionTarea'
        );

    const errorEstado =
        document.getElementById(
            'errorEstadoTarea'
        );

    /*
        Control validaciones.
    */
    let formularioValido = true;

    // ============================================
    // VALIDAR TÍTULO
    // ============================================

    if (!validarCampo(tituloTarea)) {

        mostrarError(
            errorTitulo,
            'El título es obligatorio.'
        );

        formularioValido = false;

    } else {

        limpiarError(errorTitulo);

    }

    // ============================================
    // VALIDAR DESCRIPCIÓN
    // ============================================

    if (!validarCampo(descripcionTarea)) {

        mostrarError(
            errorDescripcion,
            'La descripción es obligatoria.'
        );

        formularioValido = false;

    } else {

        limpiarError(
            errorDescripcion
        );

    }

    // ============================================
    // VALIDAR ESTADO
    // ============================================

    if (!validarCampo(estadoTarea)) {

        mostrarError(
            errorEstado,
            'Selecciona un estado.'
        );

        formularioValido = false;

    } else {

        limpiarError(errorEstado);

    }

    /*
        Si existe error,
        detenemos proceso.
    */
    if (!formularioValido) {

        return;

    }

    // ============================================
    // REGISTRAR TAREA
    // ============================================

    await registrarTarea({

        titulo: tituloTarea,

        descripcion: descripcionTarea,

        estado: estadoTarea

    });

    // ============================================
    // LIMPIAR FORMULARIO
    // ============================================

    limpiarFormulario(
        document.getElementById(
            'formularioTareas'
        )
    );

    reiniciarContadorCaracteres();

}

