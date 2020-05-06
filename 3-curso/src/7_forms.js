import React from "react"

/**
 * Los formularios funcionan un poco diferente a html normal
 *
 */
export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nombrePersona: '' };
    }

    // Cuando los formularios son complejos, conviene actualizar el estado cuando
    // los elementos cambian, y mantener el estado actualizado
    // Conviene hacerse librerias que hagan esto de forma consistente en toda la app
    handleChange = (event) => {
        let newState ={}
        newState[event.target.id] = event.target.value
        this.setState(newState);
    }

    // Ya no quieremos subir mas el formulario automaticamente, en su lugar queremos
    // usar codigo javascript para subir nuestro documento en una llamada rest
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('A name was submitted: ' + this.state.nombrePersona);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                        <input id="nombrePersona" type="text" value={this.state.nombrePersona} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

/**
 * Continuamos viendo mas ejemplos en
 * https://es.reactjs.org/docs/forms.html
 *
 * Y componentes no controlados
 * https://es.reactjs.org/docs/uncontrolled-components.html
 */

export { NameForm }