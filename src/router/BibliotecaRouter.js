import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from '../views/Principal';
import NotFound from '../views/NotFound';
import Alquilar from '../views/Alquilar';
import {Overview} from "../views/Overview";

export const BibliotecaRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/libros" element={<Overview />} />
                <Route path="/alquilar/:id" element={<Alquilar />} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
};

const Layout = ({children}) => (
    <>
        {children}
    </>
);

export default BibliotecaRouter;
