import React from "react";
import { connect } from 'react-redux';

/**
 * Es un texto que escucha mensajes y muestra el valor obtenido,
 * this.props.text, ese valor va a ser bindeado al currentText de store
 */
class ReduxLabel extends React.Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

/**
 * La funcion connect es una funcion de react-redux que nos va a permitir
 * conectar el estado de redux con un componenete React
 *
 * Esta funcion solo la vamos a usar en componentes que leen el estado de redux,
 * para los componentes que solo actualizan el estado no hace falta
 *
 * Recibe 2 parametros: mapStateToProps y mapDispatcherstoProps.
 *
 * Ambas funciones mapean el estado de redux como si fueran parametros de react
 * Para nuestros casos vamos a usar solamente la primera, porque el segundo puede ovbiarse
 * y usar directamente dispatch sobre el store.
 *
 * Noten que connect retorna una funcion que debe ser llamada con el componente de React
 * que queremos bindear, luego esta ultima llamada devuelve si, un componente de React
 * bindeado, que cuando cambie el store va a renderizarse de nuevo
 */
const mapStateToProps = (state) => {
    return {
        text: state.currentText
    }
}
const EjemploLabel = connect(
    mapStateToProps
)(ReduxLabel);

export { EjemploLabel };
