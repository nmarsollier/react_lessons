import React from "react"

/**
 * Una forma completa, es definir los componentes como
 * clases, el nombre de la clase es el nombre del componente.
 *
 * Para ello tenemos que extender de React.Component
 *
 * El mismo ejemplo anterior escrito en una clase seria
 */
export default class HelloClassSample extends React.Component {
    nombre2 = "Bruno"

    render() {
        return (
            <div>
                <HelloClassElement />
                <HelloClassElement name="Nestor" />
                <HelloClassElement name={this.nombre2} />
            </div>
        );
    }
}

class HelloClassElement extends React.Component {
    render() {
        // Las propiedades del elemento las recibimos en una property de la clase
        if (this.props.name === undefined) {
            // Null es un retorno totalmente valido, y lo que hace es no renderizar nada
            return null;
        }
        return <h1>HelloClassElement, {this.props.name}!</h1>;
    }
}