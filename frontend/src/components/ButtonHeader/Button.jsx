import React, { useState } from 'react';
import './Button.css';

function Button({ children, onClick, variant = 'primary' }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`button-navigation button-navigation-${variant} ${isHovered ? 'hovered' : ''}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="button-text">{children}</span>
        </button>
    );
}

export default Button;