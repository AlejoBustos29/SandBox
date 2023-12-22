import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Alquilar() {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        alert(`Felicidades, Es una gran elección!!.`);
    }, []);

    return (
        <div className="principal">
            <p>Cuántos libros deseas alquilar?</p>
            <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
            <Link to={"/"}> {/* Añadimos un enlace a la vista de restaurantes */}
                <h1>Confirmar alquiler</h1>
            </Link>
        </div>
    );
}

export default Alquilar;