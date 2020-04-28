import React from "react"

/**
 * La forma mas recomendada, y mas completa, es definir los componentes como
 * clases, el nombre de la clase es el nombre del componente.
 *
 * Para ello tenemos que extender de React.Component
 *
 * El mismo ejemplo anterior escrito en una clase seria
 */
export default class HelloClassSample extends React.Component {
    render() {
        let nombre2 = "Bruno"

        return (
            <div>
                <HelloClassElement />
                <HelloClassElement name="Nestor" />
                <HelloClassElement name={nombre2} />
            </div>
        );
    }
}

class HelloClassElement extends React.Component {
    render() {
        // Las propiedades del elemento las recibimos en una property de la clase
        if (!this.props.name) {
            // Null es un retorno totalmente valido, y lo que hace es no renderizar nada
            return null;
        }
        return (<h1>HelloClassElement, {this.props.name}!</h1>);
    }
}