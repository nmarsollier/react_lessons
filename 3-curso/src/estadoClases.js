import React from "react"

/**
 * El estado de una clase y su renderizacion
 */
export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: "Nestor"
        };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>Podemos usar el estado directamente {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function FormattedDate(props) {
    return <h2>O pasarle como parametro a un elemento hijo: {props.date.toLocaleTimeString()}.</h2>;
}

/**
 * Comentarios:
 * No modifiques el estado directamente
 * Las actualizaciones del estado pueden ser asíncronas
 * Las actualizaciones de estado se fusionan
 *
 */