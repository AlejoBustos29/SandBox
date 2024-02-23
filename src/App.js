import { useState } from "react";
import { BookContext } from "./context/BookContext";
import { BibliotecaRouter } from "./router/BibliotecaRouter";
import { Header } from "./components/Header";
import {useBooks} from "./hooks/useBooks";

function App() {

    const param = {"targetMethod": "GET"};
    const books = useBooks(param);
    return (
        <>
            <Header></Header>
            <BookContext.Provider value={{books}}>
                <BibliotecaRouter></BibliotecaRouter>
            </BookContext.Provider>
        </>
    );
}

export default App;