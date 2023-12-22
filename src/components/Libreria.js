import React from 'react';
import {useNavigate} from "react-router";

export const Book = ({ id, name, autor, year, codisbn, img }) => {

    const navigate = useNavigate();

    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Autor: {autor}</p>
            <p>Año Publicación: {year}</p>
            <p>Código ISBN: {codisbn}</p>
            <p>{img}</p>
            <button onClick={() => navigate("/alquilar/:id")}>Alquilar</button>
        </div>
    );
}

