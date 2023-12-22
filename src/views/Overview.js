import React from 'react';
import '../styles/styles.css';
import {Book} from "../components/Libreria";
import {Footer} from "../components/Footer";

export const Overview = () => {
    const disponibles = [
        { name: "La casa en el Aire", autor: "Rafael Escalona", year: 1948, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/15622396/pexels-photo-15622396/free-photo-of-escaleras-blanco-y-negro-edificio-hombres.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "El Testamento", autor: "Liliana Manjarres", year: 1982, codisbn: 1234567890, img: <img src="https://as2.ftcdn.net/v2/jpg/03/28/37/15/1000_F_328371506_J6eHQy1MoGzkfuTo4yXJUsKEjzlDbPBk.jpg" alt="Foto" width="250" height="250"/> },
        { name: "El Mejoral", autor: "Martha Araujo", year: 1964, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/12605142/pexels-photo-12605142.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "El Manantial", autor: "Mariana Castillo", year: 2009, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/18969973/pexels-photo-18969973/free-photo-of-agua-rocas-corriente-rio.jpeg" alt="Foto" width="250" height="250"/>},
        { name: "La Despedida", autor: "Alejo Duran", year: 1995, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/19368021/pexels-photo-19368021/free-photo-of-blanco-y-negro-bosque-arboles-ramas.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "El Jerre Jerre", autor: "Nicolas Socarras", year: 2006, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/17120644/pexels-photo-17120644/free-photo-of-animal-perro-mascota-mono.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "La Golondrina", autor: "Andres Padilla", year: 1984, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/19560882/pexels-photo-19560882.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "El Chevrolito", autor: "Francisco Noguera", year: 1953, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/5467937/pexels-photo-5467937.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "Mayte", autor: "Valentina Navarro", year: 1948, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/15622396/pexels-photo-15622396/free-photo-of-escaleras-blanco-y-negro-edificio-hombres.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "100 años de Soledad", autor: "Gabrile Garcia Marquez", year: 1982, codisbn: 1234567890, img: <img src="https://as2.ftcdn.net/v2/jpg/03/28/37/15/1000_F_328371506_J6eHQy1MoGzkfuTo4yXJUsKEjzlDbPBk.jpg" alt="Foto" width="250" height="250"/> },
        { name: "Amor en los tiempos del cólera", autor: "Gabrile Garcia Marquez", year: 1964, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/12605142/pexels-photo-12605142.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "Diosa Coronada", autor: "Mariana Castillo", year: 2009, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/18969973/pexels-photo-18969973/free-photo-of-agua-rocas-corriente-rio.jpeg" alt="Foto" width="250" height="250"/>},
        { name: "La Santa Fe", autor: "Omar Perez", year: 1995, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/19368021/pexels-photo-19368021/free-photo-of-blanco-y-negro-bosque-arboles-ramas.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "039", autor: "NAlejo Duran", year: 2006, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/17120644/pexels-photo-17120644/free-photo-of-animal-perro-mascota-mono.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "21 Lecciones Siglo XXI", autor: "Yval Harari", year: 1984, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/19560882/pexels-photo-19560882.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "Álgebra de Baldor", autor: "Aurelio Baldor", year: 1953, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/5467937/pexels-photo-5467937.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "El señor de los anillos", autor: "J.R.R. Tolkien", year: 1995, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/19368021/pexels-photo-19368021/free-photo-of-blanco-y-negro-bosque-arboles-ramas.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "Orgullo y prejuicio", autor: "Jane Austen", year: 2006, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/17120644/pexels-photo-17120644/free-photo-of-animal-perro-mascota-mono.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "Crimen y castigo", autor: "Fyodor Dostoevsky", year: 1984, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/19560882/pexels-photo-19560882.jpeg" alt="Foto" width="250" height="250"/> },
        { name: "El Ingenioso Hidalgo Don Quijote de la Mancha", autor: "Miguel de Cervantes Saavedra", year: 1615, codisbn: 1234567890, img: <img src="https://images.pexels.com/photos/5467937/pexels-photo-5467937.jpeg" alt="Foto" width="250" height="250"/> },

    ];

    return (
        <div>
            <h2 className="center-text">Libros Disponibles</h2>
            <div className="libreria-container">
                {disponibles.map((libro, index) => (
                    <Book
                        key={index}
                        name={libro.name}
                        autor={libro.autor}
                        year={libro.year}
                        codisbn={libro.codisbn}
                        img={libro.img}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}