import React, { useState } from 'react';
import './Button.scss';

function Button({ children, onClick, variant = 'primary' }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`button ${isHovered ? 'hovered' : ''}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="button__text">{children}</span>
        </button>
    );
}

export default Button;