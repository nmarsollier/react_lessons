import React from "react"

export default function Comment() {
    let user = {
        avatarUrl: "./icono.png",
        name: "Nestor"
    }
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={user} comment="Programador" />
                <div className="UserInfo-name">
                    {user.name}
                </div>
            </div>
        </div>
    );
}

/**
 * Podemos usar componentes html y expresiones jsx para las propiedades
 *
 */
function Avatar(props) {
    return (
        <div>
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
            <h4>{props.comment}</h4>
        </div>
    );
}