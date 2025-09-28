import React from 'react';
import Button from '../ButtonHeader/Button';
import './Header.scss';

function Header() {
    const handleCreateProject = () => {
        console.log('Clicked');
    };

    return (
        <header className="header">
            <div className="header__stripe"></div>
            <nav className="header__block">
                <h1 className="header__brand">Aesthetic Furniture</h1>
                <Button
                    onClick={handleCreateProject}
                    className="header__button"
                >
                    Create project
                </Button>
            </nav>
        </header>
    );
}

export default Header;