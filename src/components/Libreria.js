import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export const Book = ({ id, name, autor, year, codisbn, img }) => {

    const navigate = useNavigate();



    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Autor: {autor}</p>
            <p>Año Publicación: {year}</p>
            <p>Código ISBN: {codisbn}</p>
            <p>{img}</p>
            <button onClick={() => navigate("/alquilar/:1")}>Alquilar</button>
        </div>
    );
}

