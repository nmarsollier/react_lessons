import React from "react"

/**
 * Podemos usar map para mapear cualquier coleccion de elementos al JSX que lo representa
 * de esta forma podemos renderizar mejor nuestras ui
 *
 * map en este caso renderiza una coleccion a una lista de elementos JSX
 */
function NumberList() {
    const numbers = [0, 1, 2, 3, 4, 5];
    return (
        <ul>
            {numbers.map((number) =>
                <li key={number.toString()}>{number}</li>
            )}
        </ul>
    );
}

/**
 * Notar key en li, si bien no es necesario, es recomendable, ya que react utiliza
 * key para darse cuenta cuando un solo elemento cambio y no renderiza todo, si no es necesario
 * Normalmente es el id del elemento y agiliza el agregado y borrado de elementos en la ui
 */
function ListItem(props) {
    // Correcto! No hay necesidad de especificar la key aquí:
    return <li>{props.value}</li>;
}

// Si la lista fuera por compoenentes react, la forma correcta de usar key, es definirlo en el
// componente que mapeamos
function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correcto! La key debería ser especificada dentro del array.
        <ListItem key={number.toString()} value={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}


export { NumberList, NumberList2 }