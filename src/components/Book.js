import React from 'react';
import {useNavigate} from "react-router";

export const Book = ({ title, author, age, isbn, synapsis, stock }) => {

    const navigate = useNavigate();

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Autor: {author}</p>
            <p>Año Publicación: {age}</p>
            <p>Código ISBN: {isbn}</p>
            <p>{synapsis}</p>
            <p>{stock}</p>
            <button onClick={() => navigate("/alquilar/:id")}>Alquilar</button>
        </div>
    );
}

