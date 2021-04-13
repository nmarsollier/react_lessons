import React from "react"

/**
 * Los eventos tienen algunas diferencias, ejemplo :
 */
function ActionLink() {
    function handleClick(e) {
        // Para prevenir que un link relice una accion predeterminada usamos preventDefault()
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

/**
 * Es conveniente manejar el estado de cada uno de los elementos de la ui
 * dentro de state, por ejemplo campos de texto, check boxes, etc.
 *
 * De forma que siempre guardemos nuestro estado en state y a partir de alli
 * se renderiza toda la ui
 */
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { isToggleOn: true };

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let newState = {
            isToggleOn: !this.state.isToggleOn
        }
        this.setState(newState);
    }

    handleClickExp() {
        let newState = {
            isToggleOn: !this.state.isToggleOn
        }
        this.setState(newState);
    }

    // O bien podemos definirlo asi , que es mi preferido
    handleClickVar = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <button onClick={() => this.handleClickExp()}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <button onClick={this.handleClickVar}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

/**
 * Comunicacion entre componentes,
 *
 * Cuando nos queremos comunicar desde el padre al hijo, lo hacemos con parametros,
 * Cuando nos queremos comunicar desde el hijo al padre, lo hacemos con call back.
 *
 */


export { ActionLink, Toggle }
