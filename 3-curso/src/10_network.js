import React from "react"
import axios from "axios"

/**
 * Para obtener datos desde la web podemos usar fetch, pero es muy limitado
 * Por eso usamos axios, que es mucho mas completo, se instala el paquete y se usa.
 */
export default class NetworkCall extends React.Component {
    constructor() {
        super()
        this.state = {
            repositories: []
        }
    }

    /*
     * Notar que es conveniente siempre hacer las llamadas de red desde componentDidMount
     */
    async componentDidMount() {
        try {
            const response = await axios.get('https://api.github.com/users/nmarsollier/repos')
            this.setState({ repositories: response.data })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return <div>
            <h1>Repositorios</h1>
            {
                this.state.repositories.map(repo =>
                    <p>
                        <a href={repo.html_url}>{repo.name}</a> : {repo.description}
                    </p>
                )
            }
        </div>
    }
}
