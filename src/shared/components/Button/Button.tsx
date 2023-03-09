import React from 'react';
import './style.module.css';

interface Props {
    text: string;
}

const Button = ({text}: Props) => {
    return (
        <button>
            {text}
        </button>
    );
};

export default Button;