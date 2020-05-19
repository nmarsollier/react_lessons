import React from "react";
import { useSelector } from 'react-redux';

/**
 * Es un texto que escucha mensajes y muestra el valor obtenido,
 * this.props.text, ese valor va a ser bindeado al currentText de store
 */
function HooksLabel() {
    const text = useSelector(state => state.currentText)

    return (
        <div>
            {text}
        </div>
    );
}

export { HooksLabel };
