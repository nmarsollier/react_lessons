import React from "react"
import './9_css.css';
import styles from './clases.module.css';

/**
 * La forma mas directa de aplicar un estilo es usando la etiqueta style
 *
 * cuando usamos JSX debemos pasar como valor un objeto javascript,
 * y en caso de estilos
 *
 *
 */
class StyleCSS extends React.Component {
    render() {
        return (
            <div>
                <h1 style={
                    { color: "red", backgroundColor: "lightblue" }
                }>
                    Hello StyleCSS!
                </h1>
            </div>
        );
    }
}

/**
 * Una forma mas practica es usar un objeto, esto es muy practico porque
 * nos permite no tener que escribir archivos de estilo css, y queda todo
 * como código javascript
 */
class StyleObject extends React.Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={mystyle}>Hello StyleObject!</h1>
            </div>
        );
    }
}

/**
 * usamos className
 */
class StyleCssFile extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">Hello StyleCssFile!</h1>
            </div>
        );

    }
}

/**
 * Cuando usamos estilos relacionados con el modulo, y no queremos que esos estilos
 * se propaguen por toda la app, usamos archivos terminados en module.css. Estos archivos
 * no se comparten con otros modulos y se pueden usar los mismos nombres de estilos
 * sin complicar los otros estilos
 *
 * Notar el import del estilo, es diferente y se usa como objeto no como estilo,
 * también notar que el estilo se llama igual que el del archivo 9_css.css y no se
 * confunden para nada
 */
class StyleModuleCssFile extends React.Component {
    render() {
        return (
            <div>
                <h1 className={styles.title}>Hello StyleModuleCssFile!</h1>
            </div>
        );
    }
}

export { StyleCSS, StyleObject, StyleCssFile, StyleModuleCssFile }