import React, { useState, useEffect } from "react"

/**
 * Los hooks nos permiten utilizar el state de los componentes de
 * react directamente desde un componente funcional, de modo que simplifique
 * mucho nuestro código.
 *
 * Set useState nos permite acceder al state de un component
 *
 */
function HooksToggle() {
    const [toggledOn, setToggledOn] = useState(false);

    return (
        <div>
            <h1>Hook Toggle</h1>
            <button onClick={() => setToggledOn(!toggledOn)}>
                {toggledOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}


/**
 * Podemos engancharnos al ciclo de vida de un Component
 * desde las funciones, de modo que nos evitemos tener que
 * sobreescribir componentDidMount y componentWillUnmount
 * utilizando useEffect
 */
function HooksClock() {
    const [date, setDate] = useState(new Date());

    // Use effect se llama con un puntero a una funcion, que sera llamada
    // en el momento que se muestra en pantalla
    useEffect(() => {
        let timerID = 0
        // componentDidMount
        timerID = setInterval(
            () => setDate(new Date()),
            1000
        )

        // Esta funcion retorna otro puntero a una funcion para
        // componentWillUnmount
        return () => {
            clearInterval(timerID);
        }
    });

    return (
        <div>
            <h1>Clock en Hooks</h1>
            <h2>Podemos usar el estado directamente {date.toLocaleTimeString()}.</h2>
        </div>
    );
}


export { HooksToggle, HooksClock }
