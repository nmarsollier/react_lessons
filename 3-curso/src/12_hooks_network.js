import axios from "axios"
import React from "react"

/**
 * Para obtener datos desde la web podemos usar fetch, pero es muy limitado
 * Por eso usamos axios, que es mucho mas completo, se instala el paquete y se usa.
 */
export default function HooksNetworkCall() {
    let [repositories, setRepositories] = React.useState([])

    // useCallback genera un valor en fetchData que surge del resultado de la llamada
    // no solo puede usarse con una llamada a una api, pero es el uso mas comun
    // para asignarle un valor, usamos setRepositories, que asigna el valor y renderiza de nuevo

    // El segundo parametro es un listado de valores que hacen una
    // llamada nuevamente a la funcion cuando éstos cambian, useEffect
    // tambien puede usar este segundo parametro
    // el segundo llamado de useCallback es lo mismo, pero
    const fetchData = React.useCallback(async () => {
        try {
            const response = await axios.get('https://api.github.com/users/nmarsollier/repos?access_token=a54054edbe26456225aa8907870d4c3c97b87605')
            setRepositories(response.data)
        } catch (e) {
            console.log(e)
        }
    }, [])

    React.useEffect(() => {
        fetchData()
    })

    return <div>
        <h1>Repositorios con Hooks</h1>
        {
            repositories.map(repo =>
                <p>
                    <a href={repo.html_url}>{repo.name}</a> : {repo.description}
                </p>
            )
        }
    </div>
}
