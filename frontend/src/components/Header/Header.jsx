import React from 'react';
import Button from '../ButtonHeader/Button';
import './Header.css';

function Header() {
    const handleCreateProject = () => {
        console.log('Clicked');
    };
    return (
        <header className="header">
            <div className="black-stripe"></div>
            <nav className="navigation-block">
                <h1 className="name-website">Aesthetic Furniture</h1>
                <Button onClick={handleCreateProject}>
                    Create project
                </Button>
            </nav>
        </header>
    );
}

export default Header;