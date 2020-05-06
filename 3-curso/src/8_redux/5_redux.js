import React from "react";
import { store } from './1_store';
import { Provider } from "react-redux";
import ReduxText from "./3_text_componet";
import ReduxButton from "./2_button_component";
import { EjemploLabel } from "./4_label_component";

/**
 * Este ejemplo muestra un input, y un boton que envian mensajes
 * y un texto que escucha los eventos,
 *
 * Noten la definición de Provider, para que react-redux funcione, necesitamos
 * si o si poner todos los componentes que van a usar ese store , dentro de un provider
 *
 * Es comun tener un provider global que se defina en el componente principal, en este
 * caso es un provider que usamos solo en este ejemplo, para estos controles
 */
export default class EjemploRedux extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <h1>Redux </h1>
                    <ReduxText /><br />
                    <ReduxButton /><br /><br />

                    En otro lado de la app, podemos mostrar el estado<br />
                    Estado Acutal : <EjemploLabel />
                </Provider>
            </div>
        );
    }
}
