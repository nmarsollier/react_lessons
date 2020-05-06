import React from "react";
import { dispatchTextChange } from "./1_store";

/**
 * Es un boton que cuando se hace click se reseta el texto
 */
export default class ReduxButton extends React.Component {
    handleClick() {
        // Enviamos el mensaje
        dispatchTextChange("Click - Valor restablecido")
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>
                    Restablecer valor
                </button>
            </div>
        );
    }
}
