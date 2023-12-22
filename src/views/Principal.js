import React from 'react';
import {Link} from "react-router-dom";

function Principal() {

    return (
        <div className="principal">
            <img src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg" alt="Foto" width="350" height="150"/>
            <Link to={"/libros"}> {}
                <h1>Click aquí para ver los libros disponibles</h1>
            </Link>
        </div>
    );
}

export default Principal;