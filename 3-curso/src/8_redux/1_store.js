import { createStore } from 'redux'

/**
 * Redux esta basado en eventos, emitimos y escuchamos eventos
 */

/**
 * Acciones
 * En Redux las acciones son los eventos que vamos a enviar
 *
 * Las acciones deben tener una propiedad type que es un string que identifica el tipo de accion.
 * Las otras propiedades de la acción son propiedades que definimos en nuestro negocio.
 *
 *
 * {
 *    type: TEXT_CHANGE_ACTION,
 *    text: text
 * }
 *
 * Dado que type es un string que lo vamos a usar bastante, lo debemos poner en una constante
 *
 * Vamos a crear un factory para crear acciones, es buena practica
 * encapsular y centralizan la creación de acciones, se suelen poner en un archivo junto con la
 * definición de la acción
 *
 * store.dispatch({
 *       type: TEXT_CHANGE_ACTION,
 *       text: text
 *   })
 *
 */
let TEXT_CHANGE_ACTION = 'TEXT_CHANGE'
function dispatchTextChange(text) {
    store.dispatch({
        type: TEXT_CHANGE_ACTION,
        text: text
    })
}

/**
 * Reducers:
 * El estado global de redux es un objeto, que lo definimos con un valor inicial,
 * y con una función reducer lo que vamos a hacer es ir cambiando ese estado
 *
 * Un reducer es una función, que tiene 2 argumentos, el estado actual, y la acción
 * que se va a procesar por redux, cada vez que se emite una acción se usa esta función
 * para actualizar el estado
 *
 * Es muy importante ver que nunca actualizamos el estado, sino que es una función
 * que toma el estado inicial, y retorna otro objeto, o sea una función pura
 *
 * state puede ser undefined, por lo cual vamos a definir un valor default en la misma
 * función, eso es importante, es el valor inicial del estado del sistema
 */
const initialState = {
    currentText: "Valor inicial del store"
}
function changeTextReducer(state = initialState, action) {
    switch (action.type) {
        case TEXT_CHANGE_ACTION:
            return Object.assign({}, state, {
                currentText: action.text
            })
        default:
            return state
    }
}
/**
 * Ahora creamos nuestro store, definimos como parámetro la funcion reducer
 * Cuando nuestro negocio es muy grande, podremos hacer varias funciones reducers,
 * una por cada modulo si es necesario.
 *
 * Luego usando la funcion combineReducers de redux, podemos combinar todos en uno solo.
 *
 * Tambien podriamos definir el estado inicial en un segundo parametro, aunque es opcional
*/
const store = createStore(changeTextReducer)

/**
 * Store lo vamos a exportar, porque lo vamos a usar con redux
 *
 * Para emitir un evento, usamos dispatch, ejemplo:
 *
 * store.dispatch(newAccionEjemplo("Nuevo texto"))
 *
 * Para escuchar los cambios en el store vamos a usar react-redux, ver la parte de components
 *
 */
export { store, dispatchTextChange }
