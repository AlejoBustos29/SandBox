import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {

    return (
        <div className="principal">
            <p>Página no encontrada</p>
            <Link to={"/"}> {/* Añadimos un enlace a la vista de restaurantes */}
                <h1>Volver a página inicial</h1>
            </Link>
        </div>
    );
}

export default NotFound;