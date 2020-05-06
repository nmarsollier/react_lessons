import React from "react";
import { dispatchTextChange } from './1_store';

/**
 * Es un input text, cuando el usuario escribe se envian mensajes a redux con el texto actual
 */
export default class ReduxText extends React.Component {
    handleChange(event) {
        // Enviamos el mensaje
        dispatchTextChange(event.target.value)
    }

    render() {
        return (
            <div>
                <input id="nombrePersona" type="text" onChange={(event) => this.handleChange(event)} />
            </div>
        );
    }
}
