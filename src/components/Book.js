import React from 'react';
import {useNavigate} from "react-router";

export const Book = ({ title, author, age, gender, image, isbn, synapsis, stock }) => {

    const navigate = useNavigate();

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Autor: {author}</p>
            <p>Año Publicación: {age}</p>
            <p>Código ISBN: {isbn}</p>
            <p>Genero: {gender}</p>
            <p>{synapsis}</p>
            <p>{stock}</p>
            <img src={image} alt={title}/>
            <button onClick={() => navigate("/alquilar/:id")}>Alquilar</button>
        </div>
    );
}

