import React, { useState } from 'react';
import {useBooks} from "../hooks/useBooks";
import app from "../App";

function InputComponent (){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        alert("mensaje ");
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Que libro deseas buscar?"
            />
            <p>El valor del input es: {inputValue}</p>
        </div>
    );
};

export default InputComponent;