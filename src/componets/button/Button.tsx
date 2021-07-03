import React from 'react';
import './Button.css';
import { AiOutlineSearch } from 'react-icons/ai';

interface ButtonProps {
    onclick: () => void
}

function Button(props: ButtonProps) {
    return (
        <div className="botaocont">
            <button onClick={props.onclick} className="botao"><AiOutlineSearch/></button>
        </div>
    )
}

export default Button;
