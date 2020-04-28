import React from "react"

/**
 * En react la idea es crear tags html, los elementos html se escriben siempre en minusculas,
 *  notar la diferencia entre div y HelloJSKItem, en react tenemos mas libertad de definicion.
 *
 * La forma mas sencilla es con una funcion, una funcion utilizando JSX.
 * Estos se llaman componentes funcionales
 *
 * Una funcion que retorne JSX es una fnucion que se convierte en un elemento DOM de react.
 *
 * por ejemplo esta funcion la vamos a ver usada en index.js como
 * <HelloJSXSample />
 *
 * Como vemos mas adelante, la forma de desarrollar nuestras aplicaciones
 * es a travez de componentes, que se componen de componentes mas pequeños
 */

// export default nos va a permitir exportar este componente
// si bien podemos exportar muchos componentes desde un modulo javascript
// ej React conviene siempre exportar un solo componente por archivo
export default function HelloJSXSample() {
    // Esto es javascript
    let nombre2 = "Bruno"

    // Lo que retornamos es JSX,
    // Debemos retornar un solo elemento, pero puede estar compuesto internamente
    return (
        <div>
            <HelloJSXItem />
            <HelloJSXItem name="Nestor" />
            <HelloJSXItem name={nombre2} />
        </div>
    )
}

// Con JSX podemos utilizar un lenguage de expresiones que podemos combinar
// con html.
// props son las propiedades que le pasamos al componente
function HelloJSXItem(props) {
    if (props.name) {
        return (<h1>HelloJSXItem, {props.name}!</h1>);
    }
    return <h1>HelloJSXItem, Stranger.</h1>;
}
