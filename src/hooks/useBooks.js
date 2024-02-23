import {useEffect, useState} from "react";

export const useBooks = (param) => {

    const [books, setBooks] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        fetch("https://spring-cloud-gateway-production-9eb3.up.railway.app" + "/ms-library-books/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(param),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setBooks(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }, []);

    return books;
}