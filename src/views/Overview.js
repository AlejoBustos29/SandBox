import React, {useContext} from 'react';
import '../styles/styles.css';
import {Book} from "../components/Book";
import {Footer} from "../components/Footer";
import InputComponent from "../components/InputComponent";
import {BookContext} from "../context/BookContext";

export const Overview = () => {
    const {books} = useContext(BookContext);

    return (
        <div>
            <h2 className="center-text">Ingresa el libro que estás buscando</h2>
            <InputComponent/>
            <div className="center-text">
            </div>

            <div className="libreria-container">
                {books.map((libro, index) => (
                    <Book
                        title={libro.title}
                        author={libro.author}
                        age={libro.age}
                        isbn={libro.isbn}
                        synapsis={libro.synapsis}
                        stock={libro.stock}
                        gender={libro.gender}
                        image={libro.image}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

