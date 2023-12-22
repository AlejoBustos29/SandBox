import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {

    return (
        <div className="principal">
            <p>Página no encontrada</p>
            <Link to={"/"}> {}
                <h1>Volver a la página principal</h1>
            </Link>
        </div>
    );
}

export default NotFound;